// An example of overriding the default Studio Desk pane to add some business logic around menu items.
// You'll need to tell the studio to use this implementation instead of the built-in DefaultPane by adding the following to your sanity.json parts array
/*
    {
      "implements": "part:@sanity/components/panes/default",
      "path": "./customDefaultDeskPane.js"
    }
*/

import React, {
  useEffect, useState
} from 'react'
import DefaultPane from '@sanity/components/lib/panes/DefaultPane' // The component we are replacing (wrapping, actually)
import client from 'part:@sanity/base/client'

const CustomPane = (props) => {
  const [groups, setGroups] = useState([])

  useEffect(() => {
    // Get the current users groups.
    
    // NOTE: The user will need read access to the "system.group" documents in
    // order to figure out which groups they are a part of. If they don't have
    // access to read those documents, we can never determine membership, so all
    // relevant groups should be given the 'read' grant for type 'system.group'
    // in the case of custom access control. If you do not have custom access
    // control set up, you can instead of querying for these documents:
    
    // import userStore from 'part:@sanity/base/user'
    
    // and check the 'role' property of the user returned from the
    // userStore.currentUser observable.
    client.fetch('* [_type == "system.group" && $identity in members] {_id}')
      .then(groups => setGroups(groups.map(g => g._id)))
  }, [])

  // Default is to show no menu items, until we can inspect the
  // roles (groups) the user is a part of.
  let menuItems = []
  if (groups.length) {
    // In this example, we check if the user is a member of a
    // specific group with _id '_.groups.administrator'.
    if (groups.includes('_.groups.administrator')) {
      // Since the user is a part of this group, use the standard menuItems,
      // which will include "Create new…"
      menuItems = props.menuItems
    } else {
      // Filter out any actions you don't want to expose to the users who
      // do not match the group check above. This can be the standard Create New
      // action (item with intent.type === 'create'), but could also be initial
      // value template actions etc. Inspect and adjust the code as needed.
      menuItems = props.menuItems.filter(item => {
        if (item.intent) return item.intent.type !== 'create'
        return true
      })
    }
  }
  
  // Use the standard DefaultPane and give it our manually changed menuItems
  return <DefaultPane {...props} menuItems={menuItems} />
}

CustomPane.propTypes = DefaultPane.propTypes
CustomPane.defaultProps = DefaultPane.defaultProps

export default CustomPane
