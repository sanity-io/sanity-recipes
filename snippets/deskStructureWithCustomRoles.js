import S from '@sanity/base/structure-builder'
import client from 'part:@sanity/base/client'

// A groq query to find all access groups the current user is a member of. This
// includes both built in groups like 'administrator' and any custom groups you
// may have created as part of SSO etc.
const groupQuery = '* [_type == "system.group" && $identity in members] {_id}'

// A fallback standard Desk structure

export default () => client.fetch(groupQuery)

  // Convenience: Get the last portion of the group documents '_id' property,
  // since we'd like to just work with the string 'editors' instead of
  // '_.groups.editors'
  .then(docs => docs.map(doc => doc._id.split('.').pop()))
  .then(groupNames => {
    // groupNames now reflect the groups the current user is a member of

    // Build up an array of items depending on group membership. You may of
    // course do this completely different. This is just an example.
    const deskItems = []
    if (groupNames.includes('editors')) {
      // Add the items that editors should see
      //deskItems.push(...partOfStructureOnlyForEditors)
    }

    if (groupNames.includes('wizards')) {
      // Add the items that wizards should see
      //deskItems.push(...wizardDeskItems)
    }

    if (groupNames.includes('translators')) {
      // Completely separate desk structure
      return S.list().title('Translations').items(
        [] // Would contain items only for translators, for instance
      )
    }

    return S.list().title('Content').items(
      deskItems
    )
  })
  .catch(() => {
    // In case of any errors fetching the groups, just return some standard
    // structure. This will only happen if the query cannot be performed for
    // some reason.
    return S.list()
      .title('Standard structure')
      .items([])
  })
