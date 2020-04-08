/**
 * Simple example on how to return a structure depending on the logged in user‘s role.
 *
 * Go to https://www.sanity.io/docs/overview-structure-builder for more information on
 * how to configure structure builder.
 */

import S from '@sanity/base/structure-builder'
import userStore from 'part:@sanity/base/user'
// remember to add rxjs/operators to your dependencies with npm or yarn
import {
  map
} from 'rxjs/operators'

export default () => userStore.currentUser.pipe(
  map(({user}) => {
    const {role} = user

    if (role === 'administrator') {
      return S.list().title('Admin structure')
        // add more structure
    }
    return S.list().title('Editor structure')
      // add more structure
  })
)
