import client from "part:@sanity/base/client";

// Run this script with: `sanity exec --with-user-token migrations/migrate-document-type.js`
//
// This example shows how you can perform a migration where a document _type field is changing
//
// This will migrate documents in batches of 10 and continue patching until no more documents are
// returned from the query.
//
// A few things to note:
// - Changing the _type field on a document isn't allowed. The solution to this is to create a duplicate
//   with a new _id and _type, then delete the old document and patch all referencing documents with the new _id
// - This script will exit if any of the patches on the referencing documents fail due to a revision mismatch
//   (which means the document was edited between fetch => update)
// - The query must eventually return an empty set, or else this script will continue indefinitely
// - There's no guard against loosing data on the old, as it might change between fetch and create of new

const OLD_TYPE = "movie";
const NEW_TYPE = "film";

const fetchDocuments = () =>
  client.fetch(
    `*[_type == $oldType][0...10] {..., "incomingReferences": *[references(^._id)]{...}}`,
    { oldType: OLD_TYPE }
  );

const buildMutations = docs => {
  const mutations = [];

  docs.forEach(doc => {
    console.log("movie", doc._id);
    // Updating an document _type field isn't allowed, we have to create a new and delete the old
    const newDocId = `${doc._id}-migrated`;
    const newDocument = { ...doc, ...{ _id: newDocId, _type: NEW_TYPE } };
    delete newDocument.incomingReferences;
    delete newDocument._rev;

    mutations.push({ create: newDocument });

    // Patch each of the incoming references
    doc.incomingReferences.forEach(referencingDocument => {
      console.log("ref", referencingDocument._id);
      // ⚠️ We're assuming the field is named the same as the type!
      // There might be another structure involved, perhaps an array, that needs patching
      const updatedReference = {
        [NEW_TYPE]: {
          _ref: newDocId,
          _type: "reference"
        }
      };
      mutations.push({
        id: referencingDocument._id,
        patch: {
          set: updatedReference,
          unset: [OLD_TYPE],
          ifRevisionID: referencingDocument._rev
        }
      });
    });

    // Apply the delete mutation after references have been changed
    mutations.push({ delete: doc._id });
  });
  return mutations.filter(Boolean);
};

const createTransaction = mutations => {
  return mutations.reduce((tx, mutation) => {
    if (mutation.patch) {
      return tx.patch(mutation.id, mutation.patch);
    }
    if (mutation.delete) {
      return tx.delete(mutation.delete);
    }
    if (mutation.create) {
      return tx.createIfNotExists(mutation.create);
    }
  }, client.transaction());
};

const migrateNextBatch = async () => {
  const documents = await fetchDocuments();
  if (documents.length === 0) {
    console.log("No more documents to migrate!");
    return null;
  }
  const mutations = buildMutations(documents);
  const transaction = createTransaction(mutations);
  await transaction.commit();
  return migrateNextBatch();
};

migrateNextBatch().catch(err => {
  console.error(JSON.stringify(err, null, 2));
  process.exit(1);
});
