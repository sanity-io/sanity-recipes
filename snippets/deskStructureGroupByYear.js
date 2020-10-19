import S from '@sanity/desk-tool/structure-builder'
import client from 'part:@sanity/base/client'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Posts by year')
        .child(() => {
          const type = 'post'
          return client.fetch('* [_type == $type && defined(publishedAt)] {_id, _type, publishedAt}', {
            type
          })
            .then(docs => {
              // Create a map of years
              const years = {}
              docs.forEach(d => {
                const date = new Date(d.publishedAt)
                const year = date.getFullYear()
                if (!years[year]) { years[year] = [] }
                years[year].push(d._id)
              })
              return S.list()
                .title('Posts by year')
                .id('year')
                .items(
                  Object.keys(years).map(year => {
                    return S.listItem()
                      .id(year)
                      .title(year)
                      .child(
                        S.documentList()
                          .id(type)
                          .title(`Posts from ${year}`)
                          .filter(`_id in $ids`)
                          .params({ ids: years[year] })
                      )
                  }
                  )
                )
            })
        })
    ])
