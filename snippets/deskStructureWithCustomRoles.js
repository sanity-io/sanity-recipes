import S from '@sanity/base/structure-builder'
import client from 'part:@sanity/base/client'

// A groq query to find all access groups the current user is a member of. This
// includes both built in groups like 'administrator' and any custom groups you
// may have created as part of SSO etc.
const groupQuery = '* [_type == "system.group" && $identity in members] {_id}'

// A fallback standard Desk structure
const defaultStructure = S.list()
  .title('Standard structure')
  .items([])

export default () => client.fetch(groupQuery)

  // Convenience: Get the last portion of the group documents '_id' property,
  // since we'd like to just work with the string 'editors' instead of
  // '_.groups.editors'
  .then(docs => docs.map(doc => doc._id.split('.').pop()))
  .then(groupNames => {
    // groupNames now reflect the groups the current user is a member of
    if (groupNames.includes('editors')) {
      return S.list().title('Editors structure').items(
        [] // Specific items to editors
      )
    }
    if (groupNames.includes('wizards')) {
      return S.list().title('Wizard structure').items(
        [] // Specific items to wizards
      )
    }

    // Some standard desk structure for everyone else
    return defaultStructure
  })
  .catch(() => {
    // In case of any errors fetching the groups, just return the default
    // structure. This will only happen if the query cannot be performed for
    // some reason.
    return defaultStructure
  })
