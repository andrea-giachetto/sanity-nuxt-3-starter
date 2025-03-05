import { defineType, defineField } from 'sanity'

const NotizieEvidenza = defineType({
  title: 'Notizie in evidenza',
  name: 'NotizieEvidenza',
  type: 'object',
  fields: [
    defineField({
      title: 'Layout componente',
      name: 'layout',
      type: 'string',
      options: {
        list: [
          { title: 'Home', value: 'home' },
          { title: 'Default', value: 'default' },
        ],
      }
    }),

    // Prima notizia
    defineField({
      title: 'Prima Notizia',
      description: 'La prima notizia: la più grande e importante. Seleziona direttamente la notizia o la tipologia di contenuto che vuoi visualizzare.',
      name: 'news1',
      type: 'object',
      validation: Rule => Rule.required(),
      options: {
        collapsed: true,
        collapsible: true,
        columns: 2,
      },
      fields: [
        defineField({
          title: 'Selezione della Notizia: Manuale o Automatico',
          description: 'Se manuale, potrai selezionare quale notizia visualizzare. Se automatica, verrà visualizzata la notizia più recente in base il tema, quartiere o tag selezionato.',
          name: 'selection',
          type: 'string',
          options: {
            list: [
              { title: 'Manuale', value: 'manual' },
              { title: 'Automatico', value: 'automatic' },
            ],
          }
        }),
        // if manual, select reference to news
        defineField({
          title: 'Notizia',
          name: 'news',
          type: 'reference',
          to: [{ type: 'news' }],
          // hidden
          hidden: ({ parent }) => {
            if (!parent?.selection) return true;

            return parent?.selection === 'automatic'
          },
        }),
        defineField({
          title: 'Come selezionare la notizia',
          description: 'In modalità automatica, dovrai selezionare il tema, quartiere o tag dell\'ultima notizia impostata in evidenza.',
          name: 'selectBy',
          type: 'string',
          options: {
            list: [
              { title: 'Tema', value: 'tema' },
              { title: 'Quartiere', value: 'quartiere' },
              { title: 'Tag', value: 'tag' },
            ],
          },
          hidden: ({ parent }) => {
            if (!parent?.selection) return true;

            return parent?.selection === 'manual'
          },
        }),
        defineField({
          title: 'Tema',
          name: 'tema',
          type: 'reference',
          to: [{ type: 'tema' }],
          hidden: ({ parent }) => {
            if (!parent?.selection || !parent?.selectBy) return true;

            return parent?.selection === 'manual' || (parent?.selectBy === 'quartiere' || parent?.selectBy === 'tag')
          },
        }),
        defineField({
          title: 'Quartieri',
          name: 'quartieri',
          type: 'reference',
          to: [{ type: 'quartiere' }],
          hidden: ({ parent }) => {
            if (!parent?.selection || !parent?.selectBy) return true;

            return parent?.selection === 'manual' || (parent?.selectBy === 'tema' || parent?.selectBy === 'tag')
          },
        }),
        defineField({
          title: 'Tags',
          name: 'tags',
          type: 'reference',
          to: [{ type: 'tag' }],
          hidden: ({ parent }) => {
            if (!parent?.selection || !parent?.selectBy) return true;

            return parent?.selection === 'manual' || (parent?.selectBy === 'quartiere' || parent?.selectBy === 'tema')
          },
        }),
      ]
    }),

    // Seconda notizia
    defineField({
      title: 'Seconda Notizia',
      description: 'La seconda notizia: la prima nella sidebar laterale (desktop). Seleziona direttamente la notizia o la tipologia di contenuto che vuoi visualizzare.',
      name: 'news2',
      type: 'object',
      validation: Rule => Rule.required(),
      options: {
        collapsed: true,
        collapsible: true,
        columns: 2,
      },
      fields: [
        defineField({
          title: 'Selezione della Notizia: Manuale o Automatico',
          description: 'Se manuale, potrai selezionare quale notizia visualizzare. Se automatica, verrà visualizzata la notizia più recente in base il tema, quartiere o tag selezionato.',
          name: 'selection',
          type: 'string',
          options: {
            list: [
              { title: 'Manuale', value: 'manual' },
              { title: 'Automatico', value: 'automatic' },
            ],
          }
        }),
        // if manual, select reference to news
        defineField({
          title: 'Notizia',
          name: 'news',
          type: 'reference',
          to: [{ type: 'news' }],
          // hidden
          hidden: ({ parent }) => {
            if (!parent?.selection) return true;

            return parent?.selection === 'automatic'
          },
        }),
        defineField({
          title: 'Come selezionare la notizia',
          description: 'In modalità automatica, dovrai selezionare il tema, quartiere o tag dell\'ultima notizia impostata in evidenza.',
          name: 'selectBy',
          type: 'string',
          options: {
            list: [
              { title: 'Tema', value: 'tema' },
              { title: 'Quartiere', value: 'quartiere' },
              { title: 'Tag', value: 'tag' },
            ],
          },
          hidden: ({ parent }) => {
            if (!parent?.selection) return true;

            return parent?.selection === 'manual'
          },
        }),
        defineField({
          title: 'Tema',
          name: 'tema',
          type: 'reference',
          to: [{ type: 'tema' }],
          hidden: ({ parent }) => {
            if (!parent?.selection || !parent?.selectBy) return true;

            return parent?.selection === 'manual' || (parent?.selectBy === 'quartiere' || parent?.selectBy === 'tag')
          },
        }),
        defineField({
          title: 'Quartieri',
          name: 'quartieri',
          type: 'reference',
          to: [{ type: 'quartiere' }],
          hidden: ({ parent }) => {
            if (!parent?.selection || !parent?.selectBy) return true;

            return parent?.selection === 'manual' || (parent?.selectBy === 'tema' || parent?.selectBy === 'tag')
          },
        }),
        defineField({
          title: 'Tags',
          name: 'tags',
          type: 'reference',
          to: [{ type: 'tag' }],
          hidden: ({ parent }) => {
            if (!parent?.selection || !parent?.selectBy) return true;

            return parent?.selection === 'manual' || (parent?.selectBy === 'quartiere' || parent?.selectBy === 'tema')
          },
        }),
      ]
    }),

    // Terza notizia
    defineField({
      title: 'Terza Notizia',
      description: 'La terza notizia: la seconda nella sidebar laterale (desktop). Seleziona direttamente la notizia o la tipologia di contenuto che vuoi visualizzare.',
      name: 'news3',
      type: 'object',
      validation: Rule => Rule.required(),
      options: {
        collapsed: true,
        collapsible: true,
        columns: 2,
      },
      fields: [
        defineField({
          title: 'Selezione della Notizia: Manuale o Automatico',
          description: 'Se manuale, potrai selezionare quale notizia visualizzare. Se automatica, verrà visualizzata la notizia più recente in base il tema, quartiere o tag selezionato.',
          name: 'selection',
          type: 'string',
          options: {
            list: [
              { title: 'Manuale', value: 'manual' },
              { title: 'Automatico', value: 'automatic' },
            ],
          }
        }),
        // if manual, select reference to news
        defineField({
          title: 'Notizia',
          name: 'news',
          type: 'reference',
          to: [{ type: 'news' }],
          // hidden
          hidden: ({ parent }) => {
            if (!parent?.selection) return true;

            return parent?.selection === 'automatic'
          },
        }),
        defineField({
          title: 'Come selezionare la notizia',
          description: 'In modalità automatica, dovrai selezionare il tema, quartiere o tag dell\'ultima notizia impostata in evidenza.',
          name: 'selectBy',
          type: 'string',
          options: {
            list: [
              { title: 'Tema', value: 'tema' },
              { title: 'Quartiere', value: 'quartiere' },
              { title: 'Tag', value: 'tag' },
            ],
          },
          hidden: ({ parent }) => {
            if (!parent?.selection) return true;

            return parent?.selection === 'manual'
          },
        }),
        defineField({
          title: 'Tema',
          name: 'tema',
          type: 'reference',
          to: [{ type: 'tema' }],
          hidden: ({ parent }) => {
            if (!parent?.selection || !parent?.selectBy) return true;

            return parent?.selection === 'manual' || (parent?.selectBy === 'quartiere' || parent?.selectBy === 'tag')
          },
        }),
        defineField({
          title: 'Quartieri',
          name: 'quartieri',
          type: 'reference',
          to: [{ type: 'quartiere' }],
          hidden: ({ parent }) => {
            if (!parent?.selection || !parent?.selectBy) return true;

            return parent?.selection === 'manual' || (parent?.selectBy === 'tema' || parent?.selectBy === 'tag')
          },
        }),
        defineField({
          title: 'Tags',
          name: 'tags',
          type: 'reference',
          to: [{ type: 'tag' }],
          hidden: ({ parent }) => {
            if (!parent?.selection || !parent?.selectBy) return true;

            return parent?.selection === 'manual' || (parent?.selectBy === 'quartiere' || parent?.selectBy === 'tema')
          },
        }),
      ]
    }),

    // Quarta notizia
    defineField({
      title: 'Quarta Notizia',
      description: 'La quarta notizia: la terza nella sidebar laterale (desktop). Seleziona direttamente la notizia o la tipologia di contenuto che vuoi visualizzare.',
      name: 'news4',
      type: 'object',
      validation: Rule => Rule.required(),
      options: {
        collapsed: true,
        collapsible: true,
        columns: 2,
      },
      fields: [
        defineField({
          title: 'Selezione della Notizia: Manuale o Automatico',
          description: 'Se manuale, potrai selezionare quale notizia visualizzare. Se automatica, verrà visualizzata la notizia più recente in base il tema, quartiere o tag selezionato.',
          name: 'selection',
          type: 'string',
          options: {
            list: [
              { title: 'Manuale', value: 'manual' },
              { title: 'Automatico', value: 'automatic' },
            ],
          }
        }),
        // if manual, select reference to news
        defineField({
          title: 'Notizia',
          name: 'news',
          type: 'reference',
          to: [{ type: 'news' }],
          // hidden
          hidden: ({ parent }) => {
            if (!parent?.selection) return true;

            return parent?.selection === 'automatic'
          },
        }),
        defineField({
          title: 'Come selezionare la notizia',
          description: 'In modalità automatica, dovrai selezionare il tema, quartiere o tag dell\'ultima notizia impostata in evidenza.',
          name: 'selectBy',
          type: 'string',
          options: {
            list: [
              { title: 'Tema', value: 'tema' },
              { title: 'Quartiere', value: 'quartiere' },
              { title: 'Tag', value: 'tag' },
            ],
          },
          hidden: ({ parent }) => {
            if (!parent?.selection) return true;

            return parent?.selection === 'manual'
          },
        }),
        defineField({
          title: 'Tema',
          name: 'tema',
          type: 'reference',
          to: [{ type: 'tema' }],
          hidden: ({ parent }) => {
            if (!parent?.selection || !parent?.selectBy) return true;

            return parent?.selection === 'manual' || (parent?.selectBy === 'quartiere' || parent?.selectBy === 'tag')
          },
        }),
        defineField({
          title: 'Quartieri',
          name: 'quartieri',
          type: 'reference',
          to: [{ type: 'quartiere' }],
          hidden: ({ parent }) => {
            if (!parent?.selection || !parent?.selectBy) return true;

            return parent?.selection === 'manual' || (parent?.selectBy === 'tema' || parent?.selectBy === 'tag')
          },
        }),
        defineField({
          title: 'Tags',
          name: 'tags',
          type: 'reference',
          to: [{ type: 'tag' }],
          hidden: ({ parent }) => {
            if (!parent?.selection || !parent?.selectBy) return true;

            return parent?.selection === 'manual' || (parent?.selectBy === 'quartiere' || parent?.selectBy === 'tema')
          },
        }),
      ]
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: '',
    },
    prepare({ title }) {
      return {
        title: "Notizie in Evidenza",
      }
    },
  }
})

export default NotizieEvidenza
