import {defineType, defineField} from 'sanity'
import {DocumentsIcon} from '@sanity/icons'
import organisms from '../components/organisms'

export default defineType({
  name: 'pages',
  type: 'document',
  title: 'Pages',
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'metaDescription',
      type: 'text',
      title: 'SEO Description',
      validation: (Rule) => Rule.required().min(70).max(155),
    }),
    defineField({
      title: 'Components',
      name: 'components',
      type: 'array',
      of: organisms.map(({name}) => ({
        type: name,
      })),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
  },
})
