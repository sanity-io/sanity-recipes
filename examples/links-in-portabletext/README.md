# Minimal example of links in Portable Text

You would often want to have links in rich text. In this example we differ between internal and external links in order to take advantage of `references` in Sanity. This means that internal links will prevent referenced documents from being deleted.

* `portableText.js` => Configuration of the rich text editor with buttons for internal and external links in the toolbar
* `post.js` => example schema that use the `portableText` configuration
* `react-portableText.js` => a component that returns rich text with links
* `joinInternalLink.groq` => A query in GROQ that demonstrates how to resolve internal links

## Learn more

* [The Block type](https://www.sanity.io/docs/schema-types/block-type)
* [Select in GROQ](https://www.sanity.io/docs/groq/groq-functions)
* [Concatination in GROQ](https://www.sanity.io/docs/groq/groq-operators#object-object-addition-and-concatenation)
* [Portable Text (Block Content) in React](https://github.com/sanity-io/block-content-to-react)

Join our [community slack](https://slack.sanity.io) to get help.
