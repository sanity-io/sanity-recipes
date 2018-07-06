module.exports = [
  {
    _key: '2efd1a392b97',
    _type: 'block',
    children: [
      {
        _key: '2efd1a392b970',
        _type: 'span',
        marks: [],
        text:
          'The idea behind our query language GROQ is to be able to describe exactly what information your application needs, potentially joining together information from several sets of documents, then stitching together a very specific response with only the exact fields you need.'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '12b466082a1d',
    _type: 'block',
    children: [
      {
        _key: '12b466082a1d0',
        _type: 'span',
        marks: [],
        text:
          'If you need help setting up a client to perform these queries in your front end, you should check out the documentation for the client for '
      },
      {
        _key: '12b466082a1d1',
        _type: 'span',
        marks: ['bb6bbab9104'],
        text: 'javascript'
      },
      {
        _key: '12b466082a1d2',
        _type: 'span',
        marks: [],
        text: ' or '
      },
      {
        _key: '12b466082a1d3',
        _type: 'span',
        marks: ['27eda499105'],
        text: 'PHP'
      },
      {
        _key: '12b466082a1d4',
        _type: 'span',
        marks: [],
        text: '.'
      }
    ],
    markDefs: [
      {
        _key: 'bb6bbab9104',
        _ref: '1395f31b-6663-4f1c-bf00-7910d7ec6b8f',
        _type: 'internalLink',
        _weak: true
      },
      {
        _key: '27eda499105',
        _ref: '96d29265-3ee7-487a-9900-9084171d9889',
        _type: 'internalLink',
        _weak: true
      }
    ],
    style: 'normal'
  },
  {
    _key: 'f45e4adb051a',
    _type: 'image',
    asset: {
      _ref: 'image-SVmRparvDX5NJwj1kTe3OSl2-1600x800-png',
      _type: 'reference'
    }
  },
  {
    _key: '741625421a76',
    _type: 'block',
    children: [
      {
        _key: '741625421a760',
        _type: 'span',
        marks: [],
        text: 'Introduction'
      }
    ],
    markDefs: [],
    style: 'h2'
  },
  {
    _key: 'e086c62ee5ff',
    _type: 'block',
    children: [
      {
        _key: 'e086c62ee5ff0',
        _type: 'span',
        marks: [],
        text:
          'There are loads of advanced topics to cover, but let us start with the basics. We will take this simple query and pick it apart:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '9436ab6ac88f',
    _type: 'code',
    code: "*[_type == 'movie' && releaseYear > 1979] \n",
    language: 'text'
  },
  {
    _key: '78f4405b6852',
    _type: 'block',
    children: [
      {
        _key: '78f4405b68520',
        _type: 'span',
        marks: [],
        text: 'A query typically starts with '
      },
      {
        _key: '78f4405b68521',
        _type: 'span',
        marks: ['code'],
        text: '*'
      },
      {
        _key: '78f4405b68522',
        _type: 'span',
        marks: [],
        text:
          '. This asterisk represents every document in your dataset. To do any useful work this is typically followed by a '
      },
      {
        _key: '78f4405b68523',
        _type: 'span',
        marks: ['em'],
        text: 'filter'
      },
      {
        _key: '78f4405b68524',
        _type: 'span',
        marks: [],
        text: ' in brackets. The filter above has two terms:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: 'e9a260f5e979',
    _type: 'block',
    children: [
      {
        _key: 'e9a260f5e9790',
        _type: 'span',
        marks: [],
        text: 'The filter'
      }
    ],
    markDefs: [],
    style: 'h3'
  },
  {
    _key: '8de2f515c7c7',
    _type: 'block',
    children: [
      {
        _key: '8de2f515c7c70',
        _type: 'span',
        marks: [],
        text:
          'First we filter by document type. Every document in Sanity is required to have a type, and the type is always in the '
      },
      {
        _key: '8de2f515c7c71',
        _type: 'span',
        marks: ['code'],
        text: '_type'
      },
      {
        _key: '8de2f515c7c72',
        _type: 'span',
        marks: [],
        text:
          ' field. (We prefix any Sanity-specific fields with an underscore in an attempt to avoid clashing with any of '
      },
      {
        _key: '8de2f515c7c73',
        _type: 'span',
        marks: ['em'],
        text: 'your '
      },
      {
        _key: '8de2f515c7c74',
        _type: 'span',
        marks: [],
        text: 'field names.) So '
      },
      {
        _key: '8de2f515c7c75',
        _type: 'span',
        marks: ['code'],
        text: "_type == 'movie'"
      },
      {
        _key: '8de2f515c7c76',
        _type: 'span',
        marks: [],
        text: ' limits this query to documents of the type ‘movie’. '
      },
      {
        _key: '8de2f515c7c77',
        _type: 'span',
        marks: ['code'],
        text: '&&'
      },
      {
        _key: '8de2f515c7c78',
        _type: 'span',
        marks: [],
        text: ' is the operator “and” of course.'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: 'c9e568845521',
    _type: 'block',
    children: [
      {
        _key: 'c9e5688455210',
        _type: 'span',
        marks: [],
        text: 'The second term '
      },
      {
        _key: 'c9e5688455211',
        _type: 'span',
        marks: ['code'],
        text: 'releaseYear > 1979'
      },
      {
        _key: 'c9e5688455212',
        _type: 'span',
        marks: [],
        text: ' assumes that the movies have a field called '
      },
      {
        _key: 'c9e5688455213',
        _type: 'span',
        marks: ['code'],
        text: 'releaseYear'
      },
      {
        _key: 'c9e5688455214',
        _type: 'span',
        marks: [],
        text:
          ' contain numbers. It will match any document where this number is larger than or equal to 1979.'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '727ecb6f5e15',
    _type: 'block',
    children: [
      {
        _key: '727ecb6f5e150',
        _type: 'span',
        marks: [],
        text: 'Projections'
      }
    ],
    markDefs: [],
    style: 'h3'
  },
  {
    _key: 'af716e064e70',
    _type: 'block',
    children: [
      {
        _key: 'af716e064e700',
        _type: 'span',
        marks: [],
        text:
          'So if we run this query, the result will be an array containing all movies from the year 1979 onwards in the dataset. Nice! However in a typical application movies might be huge documents containing information on actors, staff, posters, tag-lines, show-times, ratings and what not. If our goal is to render a list of movies in an overview, we are wasting bandwidth. '
      },
      {
        _key: 'af716e064e701',
        _type: 'span',
        marks: ['em'],
        text: 'Projections'
      },
      {
        _key: 'af716e064e702',
        _type: 'span',
        marks: [],
        text: ' to the rescue.'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '0cad788a7fbc',
    _type: 'block',
    children: [
      {
        _key: '0cad788a7fbc0',
        _type: 'span',
        marks: [],
        text:
          'The typical projection is wrapped in braces and describe the data we want to see for each movie. A nice and simple projection for this query would give us the id, title and release year for each movie. It could look like this: '
      },
      {
        _key: '0cad788a7fbc1',
        _type: 'span',
        marks: ['code'],
        text: '{_id, title, releaseYear}'
      },
      {
        _key: '0cad788a7fbc2',
        _type: 'span',
        marks: [],
        text: '. Putting it all together:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: 'd3f644ea34db',
    _type: 'code',
    code: "*[_type == 'movie' && releaseYear >= 1979]{ _id, title, releaseYear } ",
    language: 'text'
  },
  {
    _key: '935c175cf329',
    _type: 'block',
    children: [
      {
        _key: '935c175cf3290',
        _type: 'span',
        marks: [],
        text: 'Basic sorting'
      }
    ],
    markDefs: [],
    style: 'h3'
  },
  {
    _key: '1bed3aca2a6b',
    _type: 'block',
    children: [
      {
        _key: '1bed3aca2a6b0',
        _type: 'span',
        marks: [],
        text:
          'Now there is another problem. Our movies appear in some unspecified order. Let’s say we want to sort our movies by year. For this we use the '
      },
      {
        _key: '1bed3aca2a6b1',
        _type: 'span',
        marks: ['code'],
        text: 'order'
      },
      {
        _key: '1bed3aca2a6b2',
        _type: 'span',
        marks: [],
        text:
          '-function. Order takes a number of fields and sort directions and orders your documents accordingly. We wanted to sort our movies by '
      },
      {
        _key: '1bed3aca2a6b3',
        _type: 'span',
        marks: ['code'],
        text: 'releaseYear'
      },
      {
        _key: '1bed3aca2a6b4',
        _type: 'span',
        marks: [],
        text: '. This is easily accomplished with '
      },
      {
        _key: '1bed3aca2a6b5',
        _type: 'span',
        marks: ['code'],
        text: 'order(releaseYear)'
      },
      {
        _key: '1bed3aca2a6b6',
        _type: 'span',
        marks: [],
        text: ', like this:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '2b049ab11490',
    _type: 'code',
    code:
      "*[_type == 'movie' && releaseYear >= 1979] | order(releaseYear) {\n  _id, title, releaseYear \n} \n",
    language: 'text'
  },
  {
    _key: 'bd4ad9601345',
    _type: 'block',
    children: [
      {
        _key: 'bd4ad96013450',
        _type: 'span',
        marks: ['em'],
        text: '(We need the '
      },
      {
        _key: 'bd4ad96013451',
        _type: 'span',
        marks: ['code', 'em'],
        text: '|'
      },
      {
        _key: 'bd4ad96013452',
        _type: 'span',
        marks: ['em'],
        text: ' operator here in front of the '
      },
      {
        _key: 'bd4ad96013453',
        _type: 'span',
        marks: ['code', 'em'],
        text: 'order()'
      },
      {
        _key: 'bd4ad96013454',
        _type: 'span',
        marks: ['em'],
        text: "-function, we'll discuss that more later.)"
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '82053d9206d2',
    _type: 'block',
    children: [
      {
        _key: '82053d9206d20',
        _type: 'span',
        marks: [],
        text:
          'We think of GROQ statements as describing a data flow from left to right. First everything ('
      },
      {
        _key: '82053d9206d21',
        _type: 'span',
        marks: ['code'],
        text: '*'
      },
      {
        _key: '82053d9206d22',
        _type: 'span',
        marks: [],
        text: ') flows through the filter'
      },
      {
        _key: '82053d9206d23',
        _type: 'span',
        marks: ['code'],
        text: " [_type == 'movie' && …]"
      },
      {
        _key: '82053d9206d24',
        _type: 'span',
        marks: [],
        text: ', then all those movies flow through the '
      },
      {
        _key: '82053d9206d25',
        _type: 'span',
        marks: ['code'],
        text: 'order()'
      },
      {
        _key: '82053d9206d26',
        _type: 'span',
        marks: [],
        text: '-function which are then all mapped through the projection '
      },
      {
        _key: '82053d9206d27',
        _type: 'span',
        marks: ['code'],
        text: '{_id, title, ...}'
      },
      {
        _key: '82053d9206d28',
        _type: 'span',
        marks: [],
        text: ' which picks out the bits we want returned.'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '35425e1bb232',
    _type: 'block',
    children: [
      {
        _key: '35425e1bb2320',
        _type: 'span',
        marks: [],
        text:
          'The order-function accepts a list of fields, and optionally you can specify the sort direction for each field. If you wanted to sort the movies by year, and then within each year we want them alphabetical by title, we could use this ordering: '
      },
      {
        _key: '35425e1bb2321',
        _type: 'span',
        marks: ['code'],
        text: 'order(releaseYear, title)'
      },
      {
        _key: '35425e1bb2322',
        _type: 'span',
        marks: [],
        text:
          ' And if we wanted the newest movies first, we could reverse the direction like this: '
      },
      {
        _key: '35425e1bb2323',
        _type: 'span',
        marks: ['code'],
        text: 'order(releaseYear desc, title)'
      },
      {
        _key: '35425e1bb2324',
        _type: 'span',
        marks: [],
        text: '.'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '76e0c1d8aa92',
    _type: 'block',
    children: [
      {
        _key: '76e0c1d8aa920',
        _type: 'span',
        marks: [],
        text: '('
      },
      {
        _key: '76e0c1d8aa921',
        _type: 'span',
        marks: ['code'],
        text: 'asc'
      },
      {
        _key: '76e0c1d8aa922',
        _type: 'span',
        marks: [],
        text: ' means “ascending” and '
      },
      {
        _key: '76e0c1d8aa923',
        _type: 'span',
        marks: ['code'],
        text: 'desc'
      },
      {
        _key: '76e0c1d8aa924',
        _type: 'span',
        marks: [],
        text:
          ' means descending in this context. If you leave out the sort-direction, Sanity will assume you want the ascending order.)'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '16b34b599b2f',
    _type: 'block',
    children: [
      {
        _key: '16b34b599b2f0',
        _type: 'span',
        marks: [],
        text: 'Slicing the result set'
      }
    ],
    markDefs: [],
    style: 'h3'
  },
  {
    _key: 'f40a6c179299',
    _type: 'block',
    children: [
      {
        _key: 'f40a6c1792990',
        _type: 'span',
        marks: [],
        text:
          'This brings us to our final problem for this query: There are many movies in the world. Maybe our dataset contains tens of thousands. We need a way to describe which slice of that list we want to show. This is done using a '
      },
      {
        _key: 'f40a6c1792991',
        _type: 'span',
        marks: ['em'],
        text: 'selector'
      },
      {
        _key: 'f40a6c1792992',
        _type: 'span',
        marks: [],
        text: '. Let’s say we just wanted the first movie, we could add a '
      },
      {
        _key: 'f40a6c1792993',
        _type: 'span',
        marks: ['code'],
        text: '[0]'
      },
      {
        _key: 'f40a6c1792994',
        _type: 'span',
        marks: [],
        text:
          ' at the end. This works exactly like an array accessor and would return only the first element. If we want a slice, we can add the range operator like this: '
      },
      {
        _key: 'f40a6c1792995',
        _type: 'span',
        marks: ['code'],
        text: '[0...100]'
      },
      {
        _key: 'f40a6c1792996',
        _type: 'span',
        marks: [],
        text:
          ' this would return the first hundred movies from index 0 through 99. Obviously we can just as well ask for '
      },
      {
        _key: 'f40a6c1792997',
        _type: 'span',
        marks: ['code'],
        text: '[1023...1048] '
      },
      {
        _key: 'f40a6c1792998',
        _type: 'span',
        marks: [],
        text:
          'or any other slice we desire. So there we are, our first basic query with filtering, ordering, projections and selector:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '752f6a5eb13d',
    _type: 'code',
    code:
      "*[_type == 'movie' && releaseYear >= 1979] | order(releaseYear) {\n  _id, title, releaseYear\n}[0...100]\n",
    language: 'text'
  },
  {
    _key: 'db43dfd18d7d',
    _type: 'block',
    children: [
      {
        _key: 'db43dfd18d7d0',
        _type: 'span',
        marks: [],
        text: 'References and joins'
      }
    ],
    markDefs: [],
    style: 'h3'
  },
  {
    _key: '6526f7185fda',
    _type: 'block',
    children: [
      {
        _key: '6526f7185fda0',
        _type: 'span',
        marks: [],
        text:
          'A reference in Sanity is a link from one document to another. Standard references are “hard” meaning when a document references another document, the target document '
      },
      {
        _key: '6526f7185fda1',
        _type: 'span',
        marks: ['em'],
        text: 'must'
      },
      {
        _key: '6526f7185fda2',
        _type: 'span',
        marks: [],
        text:
          ' exist, and is actually prevented from being deleted until the reference is removed. (There is also weak-references that do not "hold on to" the target. You make them by adding a '
      },
      {
        _key: '6526f7185fda3',
        _type: 'span',
        marks: ['code'],
        text: '_weak'
      },
      {
        _key: '6526f7185fda4',
        _type: 'span',
        marks: [],
        text: '-key to the reference object like this: '
      },
      {
        _key: '6526f7185fda5',
        _type: 'span',
        marks: ['code'],
        text: '{_ref: "<document-id>", _weak: true}'
      },
      {
        _key: '6526f7185fda6',
        _type: 'span',
        marks: [],
        text: ')'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '750dfade8a31',
    _type: 'block',
    children: [
      {
        _key: '750dfade8a310',
        _type: 'span',
        marks: [],
        text: 'Let’s say we have “person”-type documents that looks something like this:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '3469639b0249',
    _type: 'code',
    code: '{\n  _id: "ridley-scott",\n  _type: "person",\n  name: "Ridley Scott"\n}\n',
    language: 'javascript'
  },
  {
    _key: '8dac9131e52e',
    _type: 'block',
    children: [
      {
        _key: '8dac9131e52e0',
        _type: 'span',
        marks: [],
        text: 'Keeping it simple, maybe our movies had a field '
      },
      {
        _key: '8dac9131e52e1',
        _type: 'span',
        marks: ['code'],
        text: 'director'
      },
      {
        _key: '8dac9131e52e2',
        _type: 'span',
        marks: [],
        text: ' that contained a reference to a person. It could look something like this:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '26056a399708',
    _type: 'code',
    code:
      '{\n  _id: "alien",\n  _type: "movie",\n  title: "Alien",\n  releaseYear: 1979,\n  director: { _ref: "ridley-scott" }\n}',
    language: 'javascript'
  },
  {
    _key: 'b7ec9e433bec',
    _type: 'block',
    children: [
      {
        _key: 'b7ec9e433bec0',
        _type: 'span',
        marks: [],
        text:
          'Remember Sanity-specific fields are prefixed with an underscore, and an object containing a _ref key appearing anywhere in the document becomes a hard reference.'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '8ca3cefc3a31',
    _type: 'block',
    children: [
      {
        _key: '8ca3cefc3a310',
        _type: 'span',
        marks: [],
        text: 'Expanding references'
      }
    ],
    markDefs: [],
    style: 'h3'
  },
  {
    _key: '362d6b2a8c7b',
    _type: 'block',
    children: [
      {
        _key: '362d6b2a8c7b0',
        _type: 'span',
        marks: [],
        text:
          'Now we can do a number of useful things with this reference. The most basic thing is expanding the reference in place. Let’s revisit our movie-queries from the introduction.'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '49b4ad74a05f',
    _type: 'code',
    code: "*[_type == 'movie' && releaseYear >= 1979]{\n  _id, title, releaseYear\n}\n",
    language: 'text'
  },
  {
    _key: 'fbbcb1db0cb9',
    _type: 'block',
    children: [
      {
        _key: 'fbbcb1db0cb90',
        _type: 'span',
        marks: [],
        text:
          "Let’s say we wanted to include the director in the returned result. If we didn't know any better, we'd perhaps try something like this:"
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '708da0561b32',
    _type: 'code',
    code:
      "*[_type == 'movie' && releaseYear >= 1979]{\n  _id, title, releaseYear,\n  director\n}\n",
    highlightedLines: [3],
    language: 'text'
  },
  {
    _key: '2a6eee5406f0',
    _type: 'block',
    children: [
      {
        _key: '2a6eee5406f00',
        _type: 'span',
        marks: [],
        text:
          'But if we just naïvely include the director in like this, we will just get whatever is in the director field on this document, which is the literal reference description:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '675b1e1fd34c',
    _type: 'code',
    code:
      '[\n  {\n    _id: "alien",\n    title: "Alien",\n    releaseYear: "1979",\n    director: {\n      _ref: "ridley-scott"\n    }\n  },\n  … (more movies)\n]\n\n',
    highlightedLines: [7, 8, 6],
    language: 'javascript'
  },
  {
    _key: '0555bca6cec9',
    _type: 'block',
    children: [
      {
        _key: '0555bca6cec90',
        _type: 'span',
        marks: [],
        text:
          'This is obviously not what we wanted, we wanted to follow that reference! By adding the dereferencing operator '
      },
      {
        _key: '0555bca6cec91',
        _type: 'span',
        marks: ['code'],
        text: '->'
      },
      {
        _key: '0555bca6cec92',
        _type: 'span',
        marks: [],
        text:
          ' we ask Sanity to follow the reference and replace the it with the actual content of the document referenced:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '47dccf2d291b',
    _type: 'code',
    code:
      "*[_type == 'movie' && releaseYear >= 1979]{\n  _id, title, releaseYear,\n  director->\n}\n",
    highlightedLines: [3],
    language: 'text'
  },
  {
    _key: 'e922324ab678',
    _type: 'block',
    children: [
      {
        _key: 'e922324ab6780',
        _type: 'span',
        marks: [],
        text: 'Now, this is useful. We’d get something like this:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: 'd51dfeeecd1c',
    _type: 'code',
    code:
      '[\n  {\n    _id: "alien",\n    title: "Alien",\n    releaseYear: "1979",\n    director: {\n      _id: "ridley-scott",\n      _type: "person",\n      name: "Ridley Scott"\n    }\n  },\n  … (more movies)\n]\n\n',
    highlightedLines: [7, 8, 9, 10, 6],
    language: 'javascript'
  },
  {
    _key: 'c53b42035abb',
    _type: 'block',
    children: [
      {
        _key: 'c53b42035abb0',
        _type: 'span',
        marks: [],
        text:
          'Then maybe we didn’t want all that metadata with our director? We can add a separate projection for our director:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: 'ca589ec52606',
    _type: 'code',
    code:
      "*[_type == 'movie' && releaseYear >= 1979]{\n  _id, title, releaseYear,\n  director->{name}\n}\n",
    highlightedLines: [3],
    language: 'text'
  },
  {
    _key: 'd0d02703116d',
    _type: 'block',
    children: [
      {
        _key: 'd0d02703116d0',
        _type: 'span',
        marks: [],
        text: 'Our Alien-movie now looks neat like this:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '075a19f72d17',
    _type: 'code',
    code:
      '{\n  _id: "alien",\n  title: "Alien",\n  releaseYear: "1979",\n  director: {\n    name: "Ridley Scott"\n  }\n}\n',
    highlightedLines: [6, 7, 5],
    language: 'javascript'
  },
  {
    _key: 'd15dc9064cc0',
    _type: 'block',
    children: [
      {
        _key: 'd15dc9064cc00',
        _type: 'span',
        marks: [],
        text:
          'But we can do one better. We are not limited to the existing fields in the document in our projections, we can actually declare new fields. Let’s say we are building our compact movie list and we wanted just the title, year and director name. We can get minimal cruft by extracting just the name and putting it in a new field, like this:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '709f203619da',
    _type: 'code',
    code:
      '*[_type == \'movie\' && releaseYear >= 1979]{\n  _id, title, releaseYear,\n  "directorName": director->name\n}\n',
    highlightedLines: [3],
    language: 'text'
  },
  {
    _key: '0e9533c1cb58',
    _type: 'block',
    children: [
      {
        _key: '0e9533c1cb580',
        _type: 'span',
        marks: [],
        text: 'Now our Alien movie record is super neat:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '1350ef054af7',
    _type: 'code',
    code:
      '{\n  _id: "alien",\n  title: "Alien",\n  releaseYear: "1979",\n  directorName: "Ridley Scott"\n}\n',
    highlightedLines: [5],
    language: 'javascript'
  },
  {
    _key: '584ed2426ff5',
    _type: 'block',
    children: [
      {
        _key: '584ed2426ff50',
        _type: 'span',
        marks: [],
        text: 'Filtering by references'
      }
    ],
    markDefs: [],
    style: 'h3'
  },
  {
    _key: '8c36f553fb70',
    _type: 'block',
    children: [
      {
        _key: '8c36f553fb700',
        _type: 'span',
        marks: [],
        text: 'When dealing with references, we have a useful function called '
      },
      {
        _key: '8c36f553fb701',
        _type: 'span',
        marks: ['code'],
        text: 'references()'
      },
      {
        _key: '8c36f553fb702',
        _type: 'span',
        marks: [],
        text:
          ' which can be used in filters to select only documents that reference specific other documents. Let’s say we want to list every movie Ridley Scott has been involved in. It’s as simple as this:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '36302b6a223e',
    _type: 'code',
    code: "*[_type == 'movie' && references('ridley-scott')]",
    language: 'text'
  },
  {
    _key: '52023b22ca05',
    _type: 'block',
    children: [
      {
        _key: '52023b22ca050',
        _type: 'span',
        marks: [],
        text: 'Our first join'
      }
    ],
    markDefs: [],
    style: 'h3'
  },
  {
    _key: '9c63d1e15cf9',
    _type: 'block',
    children: [
      {
        _key: '9c63d1e15cf90',
        _type: 'span',
        marks: [],
        text:
          'It is time to write our first proper join: Say we wanted to list people and include all the movies they were involved in? We’ll be querying the “person”-type documents, but in the projections for each person, we’ll ask for the movies they have been involved in. To do this we have to briefly cover the parent-operator '
      },
      {
        _key: '9c63d1e15cf91',
        _type: 'span',
        marks: ['code'],
        text: '^'
      },
      {
        _key: '9c63d1e15cf92',
        _type: 'span',
        marks: [],
        text: '. Let’s look at the query first:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '7ed0c87251a8',
    _type: 'code',
    code:
      '*[_type == "person"]{\n  _id, name,\n  "movies": *[_type == "movie" && references(^._id)].title\n}\n',
    language: 'text'
  },
  {
    _key: '41bf6dd443f7',
    _type: 'block',
    children: [
      {
        _key: '41bf6dd443f70',
        _type: 'span',
        marks: [],
        text:
          'In a join, the parent operator is a way to reference the “parent” document. In this example the outer query for “person”-type documents fetches a bunch of people, and for each person it returns the '
      },
      {
        _key: '41bf6dd443f71',
        _type: 'span',
        marks: ['code'],
        text: '_id'
      },
      {
        _key: '41bf6dd443f72',
        _type: 'span',
        marks: [],
        text: ' and '
      },
      {
        _key: '41bf6dd443f73',
        _type: 'span',
        marks: ['code'],
        text: 'name'
      },
      {
        _key: '41bf6dd443f74',
        _type: 'span',
        marks: [],
        text:
          '. Then we want to fetch the movies referencing that person. Now we declare the new field “movies” where we start a new query for “movie”-type documents, but for each person we want to limit our movie-query to movies referencing that person. To achieve this we need the _id of the person, but if we just wrote '
      },
      {
        _key: '41bf6dd443f75',
        _type: 'span',
        marks: ['code'],
        text: '_id'
      },
      {
        _key: '41bf6dd443f76',
        _type: 'span',
        marks: [],
        text:
          ' in the movies-query we’d reference the _id of the movie. To get to the fields of the person record we go “up” one level using the parent operator '
      },
      {
        _key: '41bf6dd443f77',
        _type: 'span',
        marks: ['code'],
        text: '^'
      },
      {
        _key: '41bf6dd443f78',
        _type: 'span',
        marks: [],
        text: '. So '
      },
      {
        _key: '41bf6dd443f79',
        _type: 'span',
        marks: ['code'],
        text: '^'
      },
      {
        _key: '41bf6dd443f710',
        _type: 'span',
        marks: [],
        text: ' means the specific “person”-document that our movie-query is about, and then '
      },
      {
        _key: '41bf6dd443f711',
        _type: 'span',
        marks: ['code'],
        text: '^._id'
      },
      {
        _key: '41bf6dd443f712',
        _type: 'span',
        marks: [],
        text: ' is the _id of that person, just as '
      },
      {
        _key: '41bf6dd443f713',
        _type: 'span',
        marks: ['code'],
        text: '^.name'
      },
      {
        _key: '41bf6dd443f714',
        _type: 'span',
        marks: [],
        text: ' would be her name. So when we say '
      },
      {
        _key: '41bf6dd443f715',
        _type: 'span',
        marks: ['code'],
        text: 'references(^._id)'
      },
      {
        _key: '41bf6dd443f716',
        _type: 'span',
        marks: [],
        text: ' in the query above, we limit our movies to movies referencing the current person.'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: 'dd66cae5ed8f',
    _type: 'block',
    children: [
      {
        _key: 'dd66cae5ed8f0',
        _type: 'span',
        marks: [],
        text: 'Naked projections'
      }
    ],
    markDefs: [],
    style: 'h3'
  },
  {
    _key: '9cff648d5a1f',
    _type: 'block',
    children: [
      {
        _key: '9cff648d5a1f0',
        _type: 'span',
        marks: [],
        text:
          'There is one more new thing we haven’t talked about in this query. We could have written the movies-sub-query like this:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: 'ae75769cc905',
    _type: 'code',
    code: '*[_type == "movie" && references(^._id)]{title}',
    language: 'text'
  },
  {
    _key: '2e5bd1930851',
    _type: 'block',
    children: [
      {
        _key: '2e5bd19308510',
        _type: 'span',
        marks: [],
        text: 'Our list of movies would have looked something like this:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: 'bebba90a2467',
    _type: 'code',
    code: '”movies”: [{title: “Alien”}, {title: “Blade Runner”}, …]',
    language: 'javascript'
  },
  {
    _key: 'dfb7c6128dd7',
    _type: 'block',
    children: [
      {
        _key: 'dfb7c6128dd70',
        _type: 'span',
        marks: [],
        text:
          'Since we just wanted the titles, we can use a “naked projection”. By just naming the field we want, like this:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: 'b598ba4e1bc8',
    _type: 'code',
    code: '*[_type == "movie" && references(^._id)].title ',
    language: 'text'
  },
  {
    _key: '2d28c1d970c1',
    _type: 'block',
    children: [
      {
        _key: '2d28c1d970c10',
        _type: 'span',
        marks: [],
        text: 'We get a nice, simple array of values, like this:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '4004cd48e0db',
    _type: 'code',
    code: '”movies”: [“Alien”, “Blade Runner”, …]',
    language: 'javascript'
  },
  {
    _key: '75145a6998f8',
    _type: 'block',
    children: [
      {
        _key: '75145a6998f80',
        _type: 'span',
        marks: [],
        text:
          'So, for completeness, the result of the full person w/movies query above could look something like this:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '923ccf2273cc',
    _type: 'code',
    code:
      '[\n  {\n    _id: "river-phoenix",\n    name: "River Phoenix",\n    movies: ["My Own Private Idaho", "Stand By Me", …]\n  },\n  {\n    _id: "ridley-scott",\n    name: "Ridley Scott",\n    movies: ["Alien", "Blade Runner", …]\n  },\n  …\n]\n',
    language: 'javascript'
  },
  {
    _key: '99fd60e475f2',
    _type: 'block',
    children: [
      {
        _key: '99fd60e475f20',
        _type: 'span',
        marks: [],
        text: 'More ways to filter'
      }
    ],
    markDefs: [],
    style: 'h2'
  },
  {
    _key: '2c2edd160dfb',
    _type: 'block',
    children: [
      {
        _key: '2c2edd160dfb0',
        _type: 'span',
        marks: [],
        text:
          'Sanity supports a growing number of ways to filter your documents. We have shown simple attribute comparisions with '
      },
      {
        _key: '2c2edd160dfb1',
        _type: 'span',
        marks: ['code'],
        text: '_type == ‘movie’'
      },
      {
        _key: '2c2edd160dfb2',
        _type: 'span',
        marks: [],
        text: ' and  '
      },
      {
        _key: '2c2edd160dfb3',
        _type: 'span',
        marks: ['code'],
        text: 'releaseYear > 1979'
      },
      {
        _key: '2c2edd160dfb4',
        _type: 'span',
        marks: [],
        text: '. We have shown filtering by references using the '
      },
      {
        _key: '2c2edd160dfb5',
        _type: 'span',
        marks: ['code'],
        text: 'references()'
      },
      {
        _key: '2c2edd160dfb6',
        _type: 'span',
        marks: [],
        text: '-function. In addition we support:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '1d8187ad8f03',
    _type: 'block',
    children: [
      {
        _key: '1d8187ad8f030',
        _type: 'span',
        marks: [],
        text: 'Text search using the match operator, e.g. '
      },
      {
        _key: '1d8187ad8f031',
        _type: 'span',
        marks: ['code'],
        text: '*[title match "Alien*"]'
      }
    ],
    listItem: 'bullet',
    markDefs: [],
    style: 'normal'
  },
  {
    _key: 'db0a34df9ee0',
    _type: 'block',
    children: [
      {
        _key: 'db0a34df9ee00',
        _type: 'span',
        marks: [],
        text: 'Filtering by the presence of a field, e.g. '
      },
      {
        _key: 'db0a34df9ee01',
        _type: 'span',
        marks: ['code'],
        text: '*[defined(status)]'
      },
      {
        _key: 'db0a34df9ee02',
        _type: 'span',
        marks: [],
        text: ' which only match document that have the status property set to any value.'
      }
    ],
    listItem: 'bullet',
    markDefs: [],
    style: 'normal'
  },
  {
    _key: 'b9721d670370',
    _type: 'block',
    children: [
      {
        _key: 'b9721d6703700',
        _type: 'span',
        marks: [],
        text: 'The '
      },
      {
        _key: 'b9721d6703701',
        _type: 'span',
        marks: ['code'],
        text: 'in'
      },
      {
        _key: 'b9721d6703702',
        _type: 'span',
        marks: [],
        text: '-operator which matches values in arrays, as in '
      },
      {
        _key: 'b9721d6703703',
        _type: 'span',
        marks: ['code'],
        text: '*["sci-fi" in genres]'
      },
      {
        _key: 'b9721d6703704',
        _type: 'span',
        marks: [],
        text: ', that matches all documents where '
      },
      {
        _key: 'b9721d6703705',
        _type: 'span',
        marks: ['code'],
        text: 'genres'
      },
      {
        _key: 'b9721d6703706',
        _type: 'span',
        marks: [],
        text: ' is an array and that array contains the value '
      },
      {
        _key: 'b9721d6703707',
        _type: 'span',
        marks: ['code'],
        text: '"sci-fi"'
      },
      {
        _key: 'b9721d6703708',
        _type: 'span',
        marks: [],
        text: '.'
      }
    ],
    listItem: 'bullet',
    markDefs: [],
    style: 'normal'
  },
  {
    _key: 'c86c4450b10e',
    _type: 'block',
    children: [
      {
        _key: 'c86c4450b10e0',
        _type: 'span',
        marks: [],
        text: 'You can of course combine these filters using the boolean operators '
      },
      {
        _key: 'c86c4450b10e1',
        _type: 'span',
        marks: ['code'],
        text: '&&'
      },
      {
        _key: 'c86c4450b10e2',
        _type: 'span',
        marks: [],
        text: ' (and), '
      },
      {
        _key: 'c86c4450b10e3',
        _type: 'span',
        marks: ['code'],
        text: '|| '
      },
      {
        _key: 'c86c4450b10e4',
        _type: 'span',
        marks: [],
        text: '(or), '
      },
      {
        _key: 'c86c4450b10e5',
        _type: 'span',
        marks: ['code'],
        text: '!'
      },
      {
        _key: 'c86c4450b10e6',
        _type: 'span',
        marks: [],
        text: ' (not), like this '
      },
      {
        _key: 'c86c4450b10e7',
        _type: 'span',
        marks: ['code'],
        text: '*[_type == "movie" && (!("sci-fi" in genres) || releaseYear > 1979)]'
      },
      {
        _key: 'c86c4450b10e8',
        _type: 'span',
        marks: [],
        text: '.'
      }
    ],
    listItem: 'bullet',
    markDefs: [],
    style: 'normal'
  },
  {
    _key: 'bead2408ec96',
    _type: 'block',
    children: [
      {
        _key: 'bead2408ec960',
        _type: 'span',
        marks: [],
        text:
          "We are working on a full reference for the GROQ feature set. In the mean time you'll find a comprehensive set of examples in the "
      },
      {
        _key: 'bead2408ec961',
        _type: 'span',
        marks: ['eb9019d3'],
        text: 'cheat sheet'
      },
      {
        _key: 'bead2408ec962',
        _type: 'span',
        marks: [],
        text: '.'
      }
    ],
    markDefs: [
      {
        _key: 'eb9019d3',
        _ref: '81b839a4-2fc1-4769-941a-ec4de9276492',
        _type: 'internalLink'
      }
    ],
    style: 'normal'
  },
  {
    _key: '0fbcc468c3af',
    _type: 'block',
    children: [
      {
        _key: '0fbcc468c3af0',
        _type: 'span',
        marks: [],
        text: 'Queries in projections'
      }
    ],
    markDefs: [],
    style: 'h2'
  },
  {
    _key: 'c6eb29a8b6ce',
    _type: 'block',
    children: [
      {
        _key: 'c6eb29a8b6ce0',
        _type: 'span',
        marks: [],
        text:
          'A useful thing in GROQ is that filtering and projections also can be used inside your projections. Let’s say you work for an architect and every project has a number of milestones. A document might look something like this:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '21f09ac51a7e',
    _type: 'code',
    code:
      '{\n  _id: "timmerhuis"\n  _type: "project",\n  title: "Timmerhuis",\n  milestones: [\n    {status: "competition", year: 2009},\n    {status: "design-development", year: 2011},\n    {status: "breaking-ground", year: 2013},\n    {status: "completed", year: 2015}\n  ]\n}\n',
    language: 'javascript'
  },
  {
    _key: 'd4977454af38',
    _type: 'block',
    children: [
      {
        _key: 'd4977454af380',
        _type: 'span',
        marks: [],
        text:
          'And let’s say the view we are producing is about showing the current status of the project. We could achieve this by finding the latest milestone and extracting its status tag. This can be done in GROQ like this:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '4b995002ec5b',
    _type: 'code',
    code:
      '*[_type == "project"]{\n  _id, title,\n  "status": milestones|order(year desc)[0].status\n}\n',
    language: 'text'
  },
  {
    _key: 'd5c04ea46176',
    _type: 'block',
    children: [
      {
        _key: 'd5c04ea461760',
        _type: 'span',
        marks: [],
        text: 'Let’s pick apart the status query '
      },
      {
        _key: 'd5c04ea461761',
        _type: 'span',
        marks: ['code'],
        text: 'milestones|order(year desc)[0].status'
      },
      {
        _key: 'd5c04ea461762',
        _type: 'span',
        marks: [],
        text: ' in some detail:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: 'ed2e73a57e2f',
    _type: 'block',
    children: [
      {
        _key: 'ed2e73a57e2f0',
        _type: 'span',
        marks: [],
        text: 'First we take the field '
      },
      {
        _key: 'ed2e73a57e2f1',
        _type: 'span',
        marks: ['code'],
        text: 'milestones'
      },
      {
        _key: 'ed2e73a57e2f2',
        _type: 'span',
        marks: [],
        text:
          ' which contain the (potentially unordered) list of milestones for the project. Using the pipe-operator '
      },
      {
        _key: 'ed2e73a57e2f3',
        _type: 'span',
        marks: ['code'],
        text: '|'
      },
      {
        _key: 'ed2e73a57e2f4',
        _type: 'span',
        marks: [],
        text:
          ' we send the contents of this array to the order function with is instructed to sort the array by year in descending order '
      },
      {
        _key: 'ed2e73a57e2f5',
        _type: 'span',
        marks: ['code'],
        text: 'order(year desc)'
      },
      {
        _key: 'ed2e73a57e2f6',
        _type: 'span',
        marks: [],
        text: '. Then We take only the first element '
      },
      {
        _key: 'ed2e73a57e2f7',
        _type: 'span',
        marks: ['code'],
        text: '[0]'
      },
      {
        _key: 'ed2e73a57e2f8',
        _type: 'span',
        marks: [],
        text: ' (which is the latest milestone) and return the value of it’s '
      },
      {
        _key: 'ed2e73a57e2f9',
        _type: 'span',
        marks: ['code'],
        text: 'status'
      },
      {
        _key: 'ed2e73a57e2f10',
        _type: 'span',
        marks: [],
        text: ' field. So now our project list would look something like this:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '72378ea2e966',
    _type: 'code',
    code:
      '[\n  {\n    _id: "timmerhuis",\n    title: "Timmerhuis",\n    status: "completed"\n  },\n  …\n]\n',
    language: 'javascript'
  },
  {
    _key: '34af8a5dec6a',
    _type: 'block',
    children: [
      {
        _key: '34af8a5dec6a0',
        _type: 'span',
        marks: [],
        text:
          'Let’s try another clever trick querying the contents of this object. Instead of a status field, we just want a boolean flag telling whether the project is completed. We could achieve this like this:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '23bbc19f7ad3',
    _type: 'code',
    code:
      '*[_type == "project"]{\n  _id, title,\n  "completed": count(milestones[status == \'completed\']) > 0\n}\n',
    language: 'text'
  },
  {
    _key: 'a0e5578b1732',
    _type: 'block',
    children: [
      {
        _key: 'a0e5578b17320',
        _type: 'span',
        marks: [],
        text:
          'Here we take the milestones, but select only the ones having the status “completed”. Then we '
      },
      {
        _key: 'a0e5578b17321',
        _type: 'span',
        marks: ['code'],
        text: 'count()'
      },
      {
        _key: 'a0e5578b17322',
        _type: 'span',
        marks: [],
        text: ' the number of milestones matching this constraint. If that count is '
      },
      {
        _key: 'a0e5578b17323',
        _type: 'span',
        marks: ['code'],
        text: '> 0'
      },
      {
        _key: 'a0e5578b17324',
        _type: 'span',
        marks: [],
        text: ' the result is '
      },
      {
        _key: 'a0e5578b17325',
        _type: 'span',
        marks: ['code'],
        text: 'true'
      },
      {
        _key: 'a0e5578b17326',
        _type: 'span',
        marks: [],
        text: '. So now our result would look something like this:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '75883e8ac28b',
    _type: 'code',
    code:
      '[\n  {\n    _id: "timmerhuis",\n    title: "Timmerhuis",\n    completed: true\n  },\n  …\n]\n',
    language: 'javascript'
  },
  {
    _key: '6591a17c0bf9',
    _type: 'block',
    children: [
      {
        _key: '6591a17c0bf90',
        _type: 'span',
        marks: [],
        text: 'Some comments on the pipe-operator'
      }
    ],
    markDefs: [],
    style: 'h2'
  },
  {
    _key: 'c332f5858e91',
    _type: 'block',
    children: [
      {
        _key: 'c332f5858e910',
        _type: 'span',
        marks: [],
        text: 'In the project-status example above we used the pipe operator '
      },
      {
        _key: 'c332f5858e911',
        _type: 'span',
        marks: ['code'],
        text: '|'
      },
      {
        _key: 'c332f5858e912',
        _type: 'span',
        marks: [],
        text: " for a second time. Let's explore that in some detail:"
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: 'bf6e387045d9',
    _type: 'code',
    code:
      '*[_type == "project"]{\n  _id, title,\n  "status": milestones|order(year desc)[0].status\n}\n',
    language: 'text'
  },
  {
    _key: '22cdfe048562',
    _type: 'block',
    children: [
      {
        _key: '22cdfe0485620',
        _type: 'span',
        marks: [],
        text:
          'The pipe operator takes the output from its left hand side and sends it to the operation to its right. "But isn’t this what all GROQ statements does?", I hear you ask. And you’d be right. Actually, if you prefer, you can use the pipe operator a lot more. These queries are the same:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '7c5561baef34',
    _type: 'code',
    code:
      '*[_type == "movie"] | order(year) {title, body}\n\t\n* | [_type == "movie"] | order(year) | {title, body}\n',
    language: 'text'
  },
  {
    _key: 'fcbdb8d884b9',
    _type: 'block',
    children: [
      {
        _key: 'fcbdb8d884b90',
        _type: 'span',
        marks: [],
        text:
          'To make basic GROQ statements appear simpler we automatically insert the pipe operator when it is obvious. Basically this happens when the '
      },
      {
        _key: 'fcbdb8d884b91',
        _type: 'span',
        marks: ['code'],
        text: '{}'
      },
      {
        _key: 'fcbdb8d884b92',
        _type: 'span',
        marks: [],
        text: ' or '
      },
      {
        _key: 'fcbdb8d884b93',
        _type: 'span',
        marks: ['code'],
        text: '[]'
      },
      {
        _key: 'fcbdb8d884b94',
        _type: 'span',
        marks: [],
        text: ' characters are used. In one sense they are always parsed like this '
      },
      {
        _key: 'fcbdb8d884b95',
        _type: 'span',
        marks: ['code'],
        text: '|{}'
      },
      {
        _key: 'fcbdb8d884b96',
        _type: 'span',
        marks: [],
        text: 'and '
      },
      {
        _key: 'fcbdb8d884b97',
        _type: 'span',
        marks: ['code'],
        text: '|[]'
      },
      {
        _key: 'fcbdb8d884b98',
        _type: 'span',
        marks: [],
        text: '.'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: 'a5b33a77d042',
    _type: 'block',
    children: [
      {
        _key: 'a5b33a77d0420',
        _type: 'span',
        marks: [],
        text:
          'In some situations, like in the project-status example, we needed an explicit pipe-operator because there were no way for the GROQ parser to infer it. '
      },
      {
        _key: 'a5b33a77d0421',
        _type: 'span',
        marks: ['code'],
        text: 'milestones order(year desc)'
      },
      {
        _key: 'a5b33a77d0422',
        _type: 'span',
        marks: [],
        text:
          ' would be a syntax error, so in this instance we have to explicitly state the pipe operator, like this: '
      },
      {
        _key: 'a5b33a77d0423',
        _type: 'span',
        marks: ['code'],
        text: 'milestones|order(year desc)'
      },
      {
        _key: 'a5b33a77d0424',
        _type: 'span',
        marks: [],
        text: '. As a simple rule of thumb you always need the '
      },
      {
        _key: 'a5b33a77d0425',
        _type: 'span',
        marks: ['code'],
        text: '|'
      },
      {
        _key: 'a5b33a77d0426',
        _type: 'span',
        marks: [],
        text: ' in front of '
      },
      {
        _key: 'a5b33a77d0427',
        _type: 'span',
        marks: ['code'],
        text: 'order()'
      },
      {
        _key: 'a5b33a77d0428',
        _type: 'span',
        marks: [],
        text:
          ' and in the future any other function that handle document streams like order() does.'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '02a2187cb2f6',
    _type: 'block',
    children: [
      {
        _key: '02a2187cb2f60',
        _type: 'span',
        marks: [],
        text:
          'When programatically building queries in the front end, the pipe-operator can be very handy. You can chain several statements together using the pipe-operator knowing that you never create an ambiguous statement. Something like this:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '4415dab102ee',
    _type: 'code',
    code:
      "const filters = ['[_type == \"movie\"]', '[\"sci-fi\" in genres]'\nconst sorts = ['order(title)', 'order(releaseYear desc)']\nconst projection = \"{title, releaseYear}\"\nconst query = ['*'].concat(filters).concat(sorts).concat([projection]).join('|')\n",
    language: 'javascript'
  },
  {
    _key: '415d15deaa48',
    _type: 'block',
    children: [
      {
        _key: '415d15deaa480',
        _type: 'span',
        marks: [],
        text: 'Which would build the query:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: 'e6868e61106a',
    _type: 'code',
    code:
      '* |[_type == "movie"]|["sci-fi" in genres]\n  |order(title)|order(releaseYear desc)\n  |{title, releaseYear}\n',
    language: 'text'
  },
  {
    _key: '7105bfd8b5af',
    _type: 'block',
    children: [
      {
        _key: '7105bfd8b5af0',
        _type: 'span',
        marks: [],
        text: 'Which is equivalent to:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: 'f81e8bd8889c',
    _type: 'code',
    code:
      '*[_type == "movie" && "sci-fi" in genres]\n  | order(releaseYear desc, title)\n  {title, releaseYear}\n',
    language: 'text'
  },
  {
    _key: '649d43d7d179',
    _type: 'block',
    children: [
      {
        _key: '649d43d7d1790',
        _type: 'span',
        marks: [],
        text: 'Some fine points on arrays and projections'
      }
    ],
    markDefs: [],
    style: 'h2'
  },
  {
    _key: '8da82e7852d3',
    _type: 'block',
    children: [
      {
        _key: '8da82e7852d30',
        _type: 'span',
        marks: [],
        text: 'Let’s consider this document with some deep structure:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '289cd5eef3e5',
    _type: 'code',
    code:
      '{\n  _id: "alien",\n  _type: "movie",\n  title: "Alien",\n  poster: {\n    asset: {_ref: "image-1234"}\n  },\n  images: [\n    {\n      caption: "Sigourney Weaver and the cat Jones on set",\n      asset: {_ref: "image-1235"}\n    },\n    {\n      caption: "Bolaji Badejo suiting up for the role of the Alien",\n      asset: {_ref: "image-1236"}\n    },\n  ]\n}\n',
    language: 'javascript'
  },
  {
    _key: '247307f69e20',
    _type: 'block',
    children: [
      {
        _key: '247307f69e200',
        _type: 'span',
        marks: [],
        text:
          'So we have a movie with a poster image, and an array of other images. Each image has some metadata represented here by a caption, then a reference to an asset record containing all the metadata on the specific image including its url. A simplified asset record could look something like this:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: 'f2152f7285db',
    _type: 'code',
    code:
      '{\n  _id: "image-1234",\n  _type: "sanity.imageAsset",\n  url: "http:///cdn.sanity.io/images/…"\n}\n',
    language: 'javascript'
  },
  {
    _key: '31fee9c914a9',
    _type: 'block',
    children: [
      {
        _key: '31fee9c914a90',
        _type: 'span',
        marks: [],
        text:
          'Now we can easily retrieve the poster image url and attach it to our result for each movies like this:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: 'eee12404b55a',
    _type: 'code',
    code: '*[_type == "movie"]{\n  title,\n  "posterImage": poster.asset->url\n}\n',
    language: 'text'
  },
  {
    _key: '12039115bd39',
    _type: 'block',
    children: [
      {
        _key: '12039115bd390',
        _type: 'span',
        marks: [],
        text: 'But what if we wanted to do the same thing for the other images? Since the '
      },
      {
        _key: '12039115bd391',
        _type: 'span',
        marks: ['code'],
        text: 'images'
      },
      {
        _key: '12039115bd392',
        _type: 'span',
        marks: [],
        text: ' field is an array, we can’t just '
      },
      {
        _key: '12039115bd393',
        _type: 'span',
        marks: ['code'],
        text: 'images.asset->url'
      },
      {
        _key: '12039115bd394',
        _type: 'span',
        marks: [],
        text: '. We somehow have to apply the '
      },
      {
        _key: '12039115bd395',
        _type: 'span',
        marks: ['code'],
        text: 'asset->url'
      },
      {
        _key: '12039115bd396',
        _type: 'span',
        marks: [],
        text:
          '-part to each member of the array. This is accomplished by adding a blank filter, like this: '
      },
      {
        _key: '12039115bd397',
        _type: 'span',
        marks: ['code'],
        text: 'images[].asset->url'
      },
      {
        _key: '12039115bd398',
        _type: 'span',
        marks: [],
        text:
          ' which will return the image urls as a simple array. So the full query would look like this:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: 'c1fa72dc4e8d',
    _type: 'code',
    code: '*[_type == "movie"]{\n  title,\n  "imageUrls": images[].asset->url\n}\n',
    language: 'text'
  },
  {
    _key: '2907c6a88aca',
    _type: 'block',
    children: [
      {
        _key: '2907c6a88aca0',
        _type: 'span',
        marks: [],
        text: 'This would yield something like this:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '77bc559b1746',
    _type: 'code',
    code:
      '[\n  {\n    title: "Alien",\n    imageUrls: ["http://cdn.sanity.io/…", "http://cdn.sanity.io/…"]\n  },\n  …\n]\n',
    language: 'javascript'
  },
  {
    _key: 'b6681767c081',
    _type: 'block',
    children: [
      {
        _key: 'b6681767c0810',
        _type: 'span',
        marks: [],
        text:
          'If you wanted a richer data-set with your images you could use a normal projection like this (taking care to add the blank filter to apply the projection to every array member):'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '1cca9c80c55c',
    _type: 'code',
    code:
      '*[_type == "movie"]{\n  title,\n  "images": images[]{\n    caption\n    "url": asset->url,\n  }\n}\n',
    language: 'text'
  },
  {
    _key: '4c8563794f1b',
    _type: 'block',
    children: [
      {
        _key: '4c8563794f1b0',
        _type: 'span',
        marks: [],
        text: 'Now your result looks something like this:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '829ff03f5ccb',
    _type: 'code',
    code:
      '[\n  {\n    title: "Alien",\n    images: [\n      {\n        caption: "Sigourney Weaver and the cat Jones on set",\n        url: "http://cdn.sanity.io/…"\n      },\n      {\n        caption: "Bolaji Badejo suiting up for the role of the Alien",\n        url: "http://cdn.sanity.io/…"\n      }\n    ]\n  },\n  …\n]\n',
    language: 'javascript'
  },
  {
    _key: '8d57d7b0dccb',
    _type: 'block',
    children: [
      {
        _key: '8d57d7b0dccb0',
        _type: 'span',
        marks: [],
        text: 'The ellipsis operator'
      }
    ],
    markDefs: [],
    style: 'h2'
  },
  {
    _key: '0781cf59db38',
    _type: 'block',
    children: [
      {
        _key: '0781cf59db380',
        _type: 'span',
        marks: [],
        text:
          "Sometimes you might want to compute some properties of a document, but still want the entire set of attributes returned. This can be a problem since the moment you specify a projection, you'll have to list all the fields you want included. Let's say we wanted to count the actors in a movie doing something like this:"
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '1a88ebe18ee0',
    _type: 'code',
    code: '*[_type == "movie"]{\n  "actorCount": count(actors)\n}',
    language: 'text'
  },
  {
    _key: '68118622e8ee',
    _type: 'block',
    children: [
      {
        _key: '68118622e8ee0',
        _type: 'span',
        marks: [],
        text:
          'There is an obvious problem with this. We just wanted to add a custom field, but since we needed a projection to do it, now all we got is something like this:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '3cc404dc7455',
    _type: 'code',
    code: '[\n  {actorCount: 3},\n  {actorCount: 27},\n  {actorCount: 15}\n]',
    language: 'javascript'
  },
  {
    _key: '989d44304892',
    _type: 'block',
    children: [
      {
        _key: '989d443048920',
        _type: 'span',
        marks: [],
        text: 'What we wanted was our custom field in '
      },
      {
        _key: '989d443048921',
        _type: 'span',
        marks: ['em'],
        text: 'addition'
      },
      {
        _key: '989d443048922',
        _type: 'span',
        marks: [],
        text:
          ' to the normal fields. This can be achieved with the ellipsis operator. By appending it like this, we effectively say we want the fields we just specified, but also everything else:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: 'f798100dba58',
    _type: 'code',
    code: '*[_type == "movie"]{\n  "actorCount": count(actors),\n  ...\n}',
    highlightedLines: [3],
    language: 'text'
  },
  {
    _key: 'bb9afdbe00b7',
    _type: 'block',
    children: [
      {
        _key: 'bb9afdbe00b70',
        _type: 'span',
        marks: [],
        text: 'Which brings us a result that could look something like this:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '576631da8c7c',
    _type: 'code',
    code:
      '{\n  {\n    title: "Alien",\n    releaseYear: 1979,\n    actorCount: 23,\n    // And loads more fields, probably\n  },\n  // and many more movies\n}',
    language: 'javascript'
  },
  {
    _key: 'd8cbfd8dd14a',
    _type: 'block',
    children: [
      {
        _key: 'd8cbfd8dd14a0',
        _type: 'span',
        marks: [],
        text: "Queries that don't start with an "
      },
      {
        _key: 'd8cbfd8dd14a1',
        _type: 'span',
        marks: ['code'],
        text: '*'
      }
    ],
    markDefs: [],
    style: 'h2'
  },
  {
    _key: '882fba59a1cb',
    _type: 'block',
    children: [
      {
        _key: '882fba59a1cb0',
        _type: 'span',
        marks: [],
        text:
          "We said initially that most GROQ queries start with the asterisk, but they don't have to. Any valid GROQ expression can be the entire query. This is a valid query:"
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '5b3af17438a8',
    _type: 'code',
    code: 'count(*)\n',
    language: 'text'
  },
  {
    _key: '5f4f0d0596fd',
    _type: 'block',
    children: [
      {
        _key: '5f4f0d0596fd0',
        _type: 'span',
        marks: [],
        text: 'It will return the number of documents in the dataset. This is also valid:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '74659c47b405',
    _type: 'code',
    code: 'count(*[name match "sigourney"]) > 0\n',
    language: 'text'
  },
  {
    _key: '8117d6349659',
    _type: 'block',
    children: [
      {
        _key: '8117d63496590',
        _type: 'span',
        marks: [],
        text: 'It will return '
      },
      {
        _key: '8117d63496591',
        _type: 'span',
        marks: ['code'],
        text: 'true'
      },
      {
        _key: '8117d63496592',
        _type: 'span',
        marks: [],
        text: ' if any document in the entire dataset has a '
      },
      {
        _key: '8117d63496593',
        _type: 'span',
        marks: ['code'],
        text: 'name'
      },
      {
        _key: '8117d63496594',
        _type: 'span',
        marks: [],
        text: '-field containing the word "sigourney".'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '44a08ff13784',
    _type: 'block',
    children: [
      {
        _key: '44a08ff137840',
        _type: 'span',
        marks: [],
        text:
          'More usefully, you can actually have a projection be your outer statement. Like this:'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '4659c5574f32',
    _type: 'code',
    code:
      '{\n  "mainStory": *[_id == "story-1234"],\n  "campaign": *[_id == "campaign-1234"],\n  "topStories: *[_type == "story"] order(publishAt desc) [0..10]\n}',
    language: 'text'
  },
  {
    _key: 'b06ed1afd3c9',
    _type: 'block',
    children: [
      {
        _key: 'b06ed1afd3c90',
        _type: 'span',
        marks: [],
        text:
          'This combines three completely separate queries into one query and returns an object containing the result of all of them. This can be a useful way to speed up page loads. By combining queries in this manner you can often get all of the core content for a web page to load in a single, cacheable query.'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: '51bc589070b8',
    _type: 'block',
    children: [
      {
        _key: '51bc589070b80',
        _type: 'span',
        marks: [],
        text: 'Finally'
      }
    ],
    markDefs: [],
    style: 'h2'
  },
  {
    _key: 'aea14216e7b6',
    _type: 'block',
    children: [
      {
        _key: 'aea14216e7b60',
        _type: 'span',
        marks: [],
        text:
          "So there you go, this should cover 99% of what you need to understand in day-to-day use of GROQ. Reference documentation is imminent, but while we're writing it you should partake our "
      },
      {
        _key: 'aea14216e7b61',
        _type: 'span',
        marks: ['1a600461'],
        text: 'Query Cheat Sheet'
      },
      {
        _key: 'aea14216e7b62',
        _type: 'span',
        marks: [],
        text: ' which contain examples of all operators and functions currently supported.'
      }
    ],
    markDefs: [
      {
        _key: '1a600461',
        _ref: '81b839a4-2fc1-4769-941a-ec4de9276492',
        _type: 'internalLink',
        _weak: true
      }
    ],
    style: 'normal'
  }
]
