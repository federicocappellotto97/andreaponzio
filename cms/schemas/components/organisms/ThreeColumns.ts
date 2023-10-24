import {defineField, defineType} from 'sanity'

const ThreeColumns = defineType({
  name: 'ThreeColumns',
  type: 'object',
  title: 'Three Columns',
  fields: [
    defineField({
      name: 'columns',
      type: 'array',
      title: 'Columns',
      of: [
        {
          type: 'columnThreeColumns',
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Three Columns',
      }
    },
  },
})

export default ThreeColumns
