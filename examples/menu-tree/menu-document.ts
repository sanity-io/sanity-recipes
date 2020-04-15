export const Menu = {
  title: 'Menu',
  name: 'menu',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: doc => `${doc.title && doc.title}-${doc.locale && doc.locale}`,
        maxLength: 200,
      },
      validation: Rule => Rule.required(),
    },
    {
      title: 'Menu Items',
      name: 'children',
      type: 'array',
      of: [{ type: 'menuItem' }, { type: 'menuBranch' }],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Language',
      name: 'locale',
      type: 'string',
      options: {
        list: [ 'de', 'en' ],
        layout: 'dropdown',
      },
      validation: Rule => Rule.required(),
    },
  ],
  initialValue: {
    locale: 'en',
  },
  preview: {
    select: {
      title: 'slug.current',
      subtitle: 'title',
    },
    prepare(selection) {
      return {
        ...selection,
      };
    },
  },
};
