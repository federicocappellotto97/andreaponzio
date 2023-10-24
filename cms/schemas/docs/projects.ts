import {defineType, defineField} from 'sanity'
import {DashboardIcon} from '@sanity/icons'

export default defineType({
  name: 'projects',
  type: 'document',
  title: 'Projects',
  icon: DashboardIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [
        {
          type: 'block',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
