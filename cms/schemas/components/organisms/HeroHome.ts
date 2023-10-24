import {defineField, defineType} from 'sanity'

const HeroHome = defineType({
  name: 'HeroHome',
  type: 'object',
  title: 'Hero Home',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Hero Home',
      }
    },
  },
})

export default HeroHome
