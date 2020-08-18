// initialValueTemplates.js

/**
  * Learn more about initial values on https://www.sanity.io/docs/initial-value-templates-api
  */

import T from '@sanity/base/initial-value-template-builder'
import userStore from 'part:@sanity/base/user'

export default {
  ...T.defaults,
  T.template({
    id: 'newsStory',
    title: 'News story',
    schemaType: 'newsStory',
    value: async () => {
      const {name, id} = await userStore.getUser('me')
      return {
        author: {
          name,
          id,
          _type: 'author'
        },
      }
    }
  })
}

/*
Shape of the user object from userStore.getUser('me'):
{
  "id": "<user-id>",
  "name": "Your Name",
  "email": "your@email.com",
  "profileImage": "https://url.to.loginprovider/image",
  "role": "<project-role>",
}
*/
