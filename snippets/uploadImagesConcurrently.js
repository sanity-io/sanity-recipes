/* eslint-disable id-length */
/* eslint-disable no-console */
const sanityClient = require('@sanity/client')
const path = require('path')
const pMap = require('p-map')
const {
  createReadStream,
  promises: {readdir, stat}
} = require('fs')

// const client = sanityClient({
//   projectId: 'PROJECT_ID',
//   dataset: 'DATASET',
//   useCdn: false,
//   token: 'TOKEN'
// })
const client = sanityClient({
  projectId: 'xrf3c0hs',
  dataset: 'production',
  useCdn: false,
  token:
    'skmzR5ApXtsJlBuX6Jelfxp1er5CzkccsE7haHdo0hDyhw6NoPSjka64Wc3Hd1M1lLzALyt5Zwb63u16IjoBegyfg6e9hGdxp8ZBUVclL73Bwck7IGFog5sekQsTt9SaG4lmFTlryAwbcoZe0YivPcTwSkiWQvQTSG5bd3Z1H2g1icEovlD8'
})

const IMAGES_FOLDER = `${__dirname}/test-images`
const concurrency = 1

function round(num) {
  return Number(num.toFixed(2))
}

async function run() {
  const files = (await readdir(IMAGES_FOLDER)).filter(f => path.extname(f).toLowerCase() === '.jpg')
  const globalStart = new Date()

  await pMap(
    files,
    async (filename, i) => {
      const filepath = path.join(IMAGES_FOLDER, filename)
      const size = (await stat(filepath)).size
      const start = new Date()
      await client.assets
        .upload('image', createReadStream(filepath), {
          filename
        })
        .catch(err => console.log('unable to upload ', filename, err.message))
      const elapsed = new Date().getTime() - start.getTime()

      console.log(
        `Upload file #${i} ${filename} [SIZE: ${round(size / 1000)} KB --- TIME: ${round(
          elapsed / 1000
        )} s --- SPEED: ${round(size / elapsed)} KB/s]`
      )
    },
    {concurrency}
  )
  const globalElapsed = new Date().getTime() - globalStart.getTime()
  console.log(`All done in ${round(globalElapsed / 1000)} seconds`)
}
run()
