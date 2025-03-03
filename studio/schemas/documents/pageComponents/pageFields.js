import { slugify, validateSlug } from '@/utils/helperFunctions.js'
import { defineField } from 'sanity'
import pageComponents from '../pageComponents'

const pageFields = [
  {
    title: 'Title',
    name: 'title',
    type: 'string',
    validation: (Rule) => Rule.required(),
    group: 'content',
  },
  {
    title: 'Slug',
    name: 'slug',
    type: 'slug',
    options: {
      source: 'title',
      slugify: slugify,
    },
    validation: validateSlug,
    group: 'content',
  },
  defineField({
    title: 'Contenuto della pagina corrente',
    name: 'content',
    type: 'object',
    group: 'content',
    fields: [
      defineField({
        title: 'Componenti',
        name: 'components',
        description:
          'Crea il contenuto di questa pagina. Aggiungi nuove sezioni per visualizzare del contenuto nella pagina.',
        type: 'array',
        // Note: if you want to add manually sections
        // of: [{type: 'your-section'}, ...]
        of: pageComponents.map((section) => ({ type: section.name })),
      }),
    ],
  }),
  {
    title: 'SEO',
    name: 'seo',
    type: 'seo',
    group: 'seo',
  },
]

export default pageFields