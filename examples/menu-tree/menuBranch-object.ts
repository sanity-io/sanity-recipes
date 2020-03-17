export const MenuBranch = {
  title: 'Menu Branch',
  name: 'menuBranch',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: (doc, options) => {
          const parent = doc.children.find(item => item._key === options.parentPath[1]._key);
          return parent.name;
        },
      },
      validation: Rule => Rule.required(),
    },
    {
      title: 'Page',
      description:
        'The content item assigned to this branch item. This page is shown if the user clicks on the branch name. Uses the first child item if no page is assigned, e.g. forwarding the user.',
      name: 'menuItem',
      type: 'reference',
      to: [{ type: 'page' }],
    },
    {
      title: 'Menu Items',
      description: 'Child menu entries of this branch',
      name: 'children',
      type: 'array',
      of: [
        { type: 'menuItem' },
        // { type: 'menuBranch' } // Allow menuBranches for infinite recursiveness. Breaks GraphQL though. 
      ],
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: '',
      media: '',
    },
    prepare(selection) {
      return {
        ...selection,
        subtitle: 'Menu Branch',
      };
    },
  },
};
