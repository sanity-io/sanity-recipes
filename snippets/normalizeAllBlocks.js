// This will normalize every block in your dataset. For instance if you regret allowing a special decorator.
// Put on the studio root folder and run with SANITY_TOKEN=XXX npx node ./normalizeBlocks.js
// Could be used as an inspiration to migrate some type in your dataset, not just blocks.

const sanityClient = require("@sanity/client");
const { normalizeBlock } = require("@sanity/block-tools");
const { extractWithPath } = require("@sanity/mutator");
const config = require("./sanity.json");

const sanityToken = process.env.SANITY_TOKEN

if (!sanityToken) {
  throw new Error('No Sanity token found. Set with env var SANITY_TOKEN=xxxx')
}

// Act on all documents
const query = "*[]";

// Adjust the decorators to the set you want to allow
const allowedDecaorators = [
  "strong",
  "em",
  "code",
  "underline",
  "strike-through",
  "sub",
  "sup"
];

const client = sanityClient({
  projectId: config.api.projectId,
  dataset: config.api.dataset,
  useCdn: false,
  token: sanityToken
});

function convertPath(pathArr) {
  return pathArr
    .map(part => {
      if (Number.isInteger(part)) {
        return `[${part}]`;
      }
      return `.${part}`;
    })
    .join("")
    .substring(1);
}

client.fetch(query).then(results => {
  const patchedDocuments = [];
  results.forEach(async result => {
    const matches = extractWithPath('..[_type=="block"]', result);
    let patch = client.patch(result._id);
    matches.forEach(match => {
      const block = match.value;
      const path = convertPath(match.path);
      const normalizedBlock = normalizeBlock(block, { allowedDecaorators });
      const patchData = { [path]: normalizedBlock };
      patch = patch.set(patchData);
    });
    const patchLength = patch.operations.set
      ? Object.keys(patch.operations.set).length
      : 0;
    if (patchLength > 0) {
      patchedDocuments.push(result._id);
      await patch.commit();
      console.log(
        `Patched ${patchLength} blocks in document ${result._id}`
      );
    }
  });
  console.log(
    `Patched ${patchedDocuments.length} documents with ids: ${JSON.stringify(
      patchedDocuments,
      null,
      2
    )}`
  );
});
