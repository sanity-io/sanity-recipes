const convertQuotationMarks = require('../snippets/convertQuotationMarks')
const singleQuotationMarks = require('./fixtures/singleQuotationMarks.fixture')
const doubleQuotationMarks = require('./fixtures/doubleQuotationMarks.fixture')

test('converts quotation marks to guillemets by default', () => {
  expect(convertQuotationMarks(doubleQuotationMarks)).toMatchSnapshot()
})

test('can converts quotation marks to specific characters', () => {
  expect(convertQuotationMarks(doubleQuotationMarks, {open: '“', close: '”'})).toMatchSnapshot()
})

test('can converts single quotation marks', () => {
  expect(convertQuotationMarks(singleQuotationMarks, {find: "'"})).toMatchSnapshot()
})

test('can converts single quotation marks to specific characters', () => {
  expect(convertQuotationMarks(singleQuotationMarks, {find: "'", open: '"', close: '"'})).toEqual(
    doubleQuotationMarks
  )
})
