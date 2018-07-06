module.exports = [
  {
    _type: 'block',
    children: [
      {
        _type: 'span',
        marks: [],
        text: `Warning: "`
      },
      {
        _type: 'span',
        marks: ['strong'],
        text: `Sanity"`
      },
      {
        _type: 'span',
        marks: ['strong'],
        text: ' is'
      },
      {
        _type: 'span',
        marks: ['em'],
        text: ` "addictive".`
      }
    ]
  },
  {
    _type: 'block',
    children: [
      {
        _type: 'span',
        marks: ['strong'],
        text: `Unmatched quotation marks? "`
      },
      {
        _type: 'span',
        marks: ['strong'],
        text: 'sure, why not?'
      }
    ]
  }
]
