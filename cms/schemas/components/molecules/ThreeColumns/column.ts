import {defineField, defineType} from 'sanity'

const columnThreeColumns = defineType({
  name: 'columnThreeColumns',
  type: 'object',
  title: 'Column of Three Columns',
  fields: [
    defineField({
      name: 'column',
      type: 'array',
      title: 'Column',
      of: [
        {
          type: 'columnItem',
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'column',
    },
    prepare({title}) {
      return {
        title: title.length > 1 ? `${title.length} columns` : `${title.length} column`,
      }
    },
  },
})

export const columnItem = defineType({
  name: 'columnItem',
  type: 'object',
  title: 'Column Item',
  fields: [
    defineField({
      name: 'columnItem',
      type: 'object',
      title: 'Column Item',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'text',
          type: 'array',
          title: 'Text',
          of: [
            {
              type: 'block',
              marks: {
                annotations: [
                  {
                    name: 'link',
                    type: 'object',
                    title: 'Link',
                    fields: [
                      {
                        name: 'href',
                        type: 'string',
                        title: 'URL',
                      },
                      {
                        title: 'Open in new tab',
                        name: 'blank',
                        type: 'boolean',
                      },
                    ],
                  },
                ],
              },
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'columnItem.title',
    },
    prepare({title}) {
      return {
        title: title,
      }
    },
  },
})

export default columnThreeColumns
