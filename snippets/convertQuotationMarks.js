const defaults = {open: '«', close: '»', find: '"'}

module.exports = function convertQuotationMarks(blocks, chars = defaults) {
  const characters = chars === defaults ? defaults : Object.assign({}, defaults, chars)
  const find = characters.find.replace(/([?!${}*:()|=^[\]/\\.+])/g, '\\$1')
  const pattern = new RegExp(find, 'g')

  return blocks.map(block => {
    if (block._type !== 'block' || !block.children) {
      return block
    }

    let isOpen = false
    const children = block.children.map(child => {
      if (child._type !== 'span' || !child.text) {
        return child
      }

      const text = child.text.replace(pattern, () => {
        const char = isOpen ? characters.close : characters.open
        isOpen = !isOpen
        return char
      })

      return Object.assign({}, child, {text})
    })

    return Object.assign({}, block, {children})
  })
}
