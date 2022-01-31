import { PortableText } from '@portabletext/react'

const components = {
  marks: {
    internalLink: ({value, children}) => {
      const {_type, slug = {}, url} = value
      const href = url ? url : `/${_type}/${slug.current}`
      return <a href={href}>{children}</a>
    },
    externalLink: ({value, children}) => {
      // Read https://css-tricks.com/use-target_blank/
      const { blank, href } = value
      return blank ?
        <a href={href} target="_blank" rel="noopener">{children}</a>
        : <a href={href}>{children}</a>
    }
  }
}

const BodyText = (props) => (
  <PortableText
    value={props.blocks}
    components={components}
  />
)

export default BodyText
