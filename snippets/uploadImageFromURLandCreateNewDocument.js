#!/usr/bin/env node

require('dotenv').config()
const got = require('got')
const SanityClient = require('@sanity/client')

const client = SanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_WRITE_TOKEN.
  useCdn: false
})

async createADocumentWithAsset(imageURL) {
  const {_id} = await client.upload('image', got(imageURL)).catch(error => console.error(error))
  const newDoc = await client.create({
    _type: 'someType',
    mainImage: {
      _type: 'mainImage',
      asset: {
        _type: 'reference',
        _ref: _id
      }
    }
  }).catch(error => console.error(error))
  
  return newDoc
}

const URL_TO_KITTEN_IMAGE = 'https://placekitten.com/g/2000/3000'

createADocumentWithAsset(URL_TO_KITTEN_IMAGE).then(doc => console.log('This is your new doc:\n', JSON.stringify(doc, null, 2)))
