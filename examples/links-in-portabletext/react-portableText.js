import PortableText from '@sanity/block-content-to-react'

const serializers = {
  marks: {
    internalLink: ({mark, children}) => {
      const {type, slug = {}, url} = mark
      const href = url ? url : `/${_type}/${slug.current}`
      return <a href={href}>{children}</a>
    },
    externalLink: ({mark, children}) => {
      // Read https://css-tricks.com/use-target_blank/
      const { blank, href } = mark
      return blank ?
        <a href={href} target="_blank" rel="noopener">{children}</a>
        : <a href={href}>{children}</a>
    }
  }
}

const BodyText = (props) => (
  <PortableText
    blocks={props.blocks}
    serializers={serializers}
  />
  )

export BodyText
