import { defineArrayMember, defineType, defineField } from 'sanity'

const Griglia = defineType({
  title: 'Griglia',
  description: 'Questo componente permette di visualizzare una griglia di notizie in base a un tema, quartiere o tag.',
  name: 'Griglia',
  type: 'object',
  fields: [
    defineField({
      title: 'Titolo della sezione',
      description: 'Se lasciato vuoto, il titolo della sezione verrà determinato automaticamente in base al tipo di Notizia da visualizzare. (ES: "Temi" o "Quartieri")',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Che tipo di griglia vuoi visualizzare?',
      description: 'Crea una griglia di Temi o Quartieri',
      name: 'selectBy',
      type: 'string',
      options: {
        list: [
          { title: 'Lista Temi', value: 'tema' },
          { title: 'Lista Quartieri', value: 'quartiere' },
        ],
      },
    }),
    defineField({
      title: 'Tema',
      name: 'tema',
      type: 'reference',
      to: [{ type: 'tema' }],
      hidden: ({ parent }) => parent?.selectBy !== 'tema',
    }),
    defineField({
      title: 'Quartieri',
      name: 'quartieri',
      type: 'reference',
      to: [{ type: 'quartiere' }],
      hidden: ({ parent }) => parent?.selectBy !== 'quartiere',
    }),
  ],
  preview: {
    select: {
      title: 'Lista Notizie',
      media: '',
    },
    prepare({ title }) {
      return {
        title: 'Griglia',
      }
    },
  }
})

export default Griglia
