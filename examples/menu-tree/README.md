# Self contained menu / tree document

This is a document type that can be used to build a tree-like structure. Each leaf is a reference to another, existing document. This example allows for one depth of branches - you can make it recursive by allowing branches to be added to branches.

The accompanying GROQ query builds an easily parseable structure for your frontend application. The file includes a TypeScript projection of what the structure will look like. It also includes fallbacks for handling branches with or without attached documents, in this order:

- A branch item itself can reference a document
- If no document is referenced, the first child of the branch item is referenced

[Oliver](https://github.com/genox)