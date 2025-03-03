import { defineArrayMember, defineType, defineField } from 'sanity'

let title = 'ContenutoArticolo'

const ContenutoArticolo = defineType({
  title,
  name: title.charAt(0).toLowerCase() + title.slice(1),
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: '',
    },
    prepare({ title }) {
      return {
        title,
      }
    },
  }
})

export default ContenutoArticolo
