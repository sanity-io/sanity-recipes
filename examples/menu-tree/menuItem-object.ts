export const MenuItem = {
  title: 'Menu Item',
  name: 'menuItem',
  type: 'object',
  fields: [
    {
      title: 'Content Item',
      description: 'Reference existing content to be used in the navigation structure.',
      name: 'page',
      type: 'reference',
      to: [{ type: 'page' }],
    },
  ],
  preview: {
    select: {
      title: '',
      pageSlug: 'page.slug',
      pageTitle: 'page.name',
      media: '',
    },
    prepare(selection) {
      const { pageSlug, pageTitle } = selection;
      return {
        ...selection,
        title: pageTitle,
        subtitle: `Content Item | ${pageSlug.current}`,
      };
    },
  },
};
