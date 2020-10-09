# sanity-recipes

Just a collection of recipies / snippets / frequently asked questions about Sanity.

Note that these things are just meant as inspiration and is usually not documented. You'll usually have to copy + paste the code and possibly adjust it slightly to fit your use case. Some might be published as NPM modules at some point if it makes sense.

## Table of Contents

- [sanity-recipes](#sanity-recipes)
  - [Table of Contents](#table-of-contents)
  - [Portable Text Content](#portable-text-content)
    - [Portable Text as plain text](#portable-text-as-plain-text)
    - [Convert quotation marks in Portable Text](#convert-quotation-marks-in-portable-text)
  - [Content Migrations](#content-migrations)
    - [Delete unused assets](#delete-unused-assets)
    - [Uploading assets concurrently](#uploading-assets-concurrently)
    - [Rename fields](#rename-fields)
  - [Components](#components)
    - [Filter-aware Custom Input Component](#filter-aware-custom-input-component)
    - [Conditional fields Custom Input Component](#conditional-fields-custom-input-component)
  - [License](#license)

---

## Portable Text Content

### Portable Text as plain text

Sometimes you just want to skim over a whole bunch of [Portable Text](https://www.portabletext.org) as text. [This function](snippets/blocksToText.js) does this, with some basic options for handling non-text nodes.

### Convert quotation marks in Portable Text

Someone wanted to convert "whatever" to «whatever» when rendering. [`convertQuotationMarks()`](snippets/convertQuotationMarks.js) to the rescue!

## Content Migrations

### Delete unused assets

When uploading images and files, sometimes you are left with assets that are no longer in use by any documents. In these cases, you may want to purge the unused assets to free up some space and clear the clutter. This will probably be a core part of the Sanity toolkit at some point, but until then, [this script](snippets/deleteUnusedAssets.js) should help you!

### Uploading assets concurrently

A script which demonstrates how to upload multiple assets (images in this case) concurrently. Edit projectId, dataset and token. Also, edit the concurrency constant to change how many uploads run in parallel. To run the script: `node snippets/uploadImagesConcurrently.js`

### Rename fields

Sometimes you want to change the name of a field. [This function](snippets/renameField.js) can be run with `sanity exec renameField.js --with-user-credentials` and do a migration even while users are working.

## Components

### Filter-aware Custom Input Component

The [Sanity documentation](https://sanity.io/docs) contains several examples on how to create a Custom Input Component, but what if you want one which is also aware of language filter options? [This component](snippets/CustomObjectInputWithLanguageFilter.js) provides a good point of departure for making your own.

### Conditional fields Custom Input Component

This [custom input component](snippets/conditionalFieldsCustomInputComponent.js) shows an example of how to render a field conditionally of a field’s value in your document.

## License

All code is MIT-licensed. See LICENSE.
