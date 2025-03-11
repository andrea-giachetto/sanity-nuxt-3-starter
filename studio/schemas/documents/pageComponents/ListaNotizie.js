import { defineArrayMember, defineType, defineField } from 'sanity'

const ListaNotizie = defineType({
  title: 'Lista Notizie',
  name: 'ListaNotizie',
  type: 'object',
  fields: [
    defineField({
      title: 'Titolo della sezione',
      description: 'Se lasciato vuoto, il titolo della sezione verrà determinato automaticamente in base al tipo di Notizia da visualizzare. (ES: "Ultime Notizie" o "Politica")',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Colonne della lista di anteprima',
      description: 'Fai riferimento al documento "Specifiche Tecniche" per vedere il layout di ogni opzione',
      name: 'columns',
      type: 'string',
      options: {
        list: [
          { title: '2 colonne', value: '2-cols' },
          { title: '3 colonne (1 grande 2 piccole)', value: '3-cols-v1' },
          { title: '3 colonne (stessa grandezza)', value: '3-cols-v2' },
          { title: '4 colonne', value: '4-cols' },
        ],
      },
    }),
    defineField({
      title: 'Layout componente',
      name: 'layout',
      type: 'string',
      options: {
        list: [
          { title: 'Anteprima', value: 'preview' },
          { title: 'Completa', value: 'complete' },
        ],
      }
    }),
    defineField({
      title: 'Come selezionare la notizia',
      description: 'Dovrai selezionare il tema, quartiere o tag dell\'ultima notizia impostata in evidenza.',
      name: 'selectBy',
      type: 'string',
      options: {
        list: [
          { title: 'Tema', value: 'tema' },
          { title: 'Quartiere', value: 'quartiere' },
          { title: 'Tag', value: 'tag' },
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
    defineField({
      title: 'Tags',
      name: 'tags',
      type: 'reference',
      to: [{ type: 'tag' }],
      hidden: ({ parent }) => parent?.selectBy !== 'tag',
    }),
  ],
  preview: {
    select: {
      title: 'Lista Notizie',
      media: '',
    },
    prepare({ title }) {
      return {
        title: 'Lista Notizie',
      }
    },
  }
})

export default ListaNotizie
