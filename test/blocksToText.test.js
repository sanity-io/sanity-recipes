const blocksToText = require('../snippets/blocksToText')
const manyBlocks = require('./fixtures/manyBlocks.fixture')

test('converts blocks to text while removing non-text blocks by default', () => {
  expect(blocksToText(manyBlocks)).toMatchSnapshot()
})

test('converts blocks to text while adding placeholders for non-text blocks', () => {
  expect(blocksToText(manyBlocks, {nonTextBehavior: 'placeholder'})).toMatchSnapshot()
})
