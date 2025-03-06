import { defineArrayMember, defineType, defineField } from 'sanity'

const ContenutoArticolo = defineType({
  title: "Contenuto Articolo",
  name: "ContenutoArticolo",
  type: 'object',
  fields: [
    defineField({
      title: 'Contenuto della Notizia',
      name: 'text',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: '',
    },
    prepare({ title }) {
      return {
        title: "Contenuto Articolo",
      }
    },
  }
})

export default ContenutoArticolo
