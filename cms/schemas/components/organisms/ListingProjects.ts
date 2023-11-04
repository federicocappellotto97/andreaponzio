import { defineField, defineType } from 'sanity'

const ListingProjects = defineType({
  name: 'ListingProjects',
  type: 'object',
  title: 'Listing Projects',
  fields: [
    defineField({
      name: 'placeholder',
      type: 'string',
      title: 'Placeholder',
      hidden: true,
      initialValue: 'placeholder',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Listing Projects',
      }
    },
  },
})

export default ListingProjects
