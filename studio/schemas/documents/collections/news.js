import { slugify, validateSlug } from '@/utils/helperFunctions.js'
import { BiFile } from 'react-icons/bi/'
import pageFields from '../pageComponents/pageFields'
import groups from '../groups'
import { defineField } from 'sanity'
import pageComponents from '../pageComponents'

export default {
  title: 'News',
  name: 'news',
  type: 'document',
  icon: BiFile,
  groups: [
    ...groups,

    {
      title: 'Tema, Tags e Quartieri',
      name: 'assegnazioni',
    }
  ],
  fields: [

    {
      title: 'Titolo del contenuto',
      name: 'title',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
      group: 'content',
    },
    defineField({
      title: 'Sottotitolo',
      description: 'Inserisci il sottotitolo dell\'articolo.',
      name: 'subtitle',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required(),
      group: 'content',
    }),
    {
      title: 'Slug',
      description: 'URL univoco per questa pagina. Se lasciato vuoto, verrà generato automaticamente.',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: slugify,
      },
      validation: validateSlug,
      group: 'settings',
    },
    {
      title: 'Immagine',
      description: 'Attenzione: questa immagine verrà usata come anteprima della notizia, come testata della pagina dettaglio e come Open Graph Image.',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'settings',
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
      title: 'In evidenza',
      description: 'Seleziona per mettere in evidenza la news.',
      name: 'isHighlight',
      type: 'boolean',
      validation: Rule => Rule.required(),
      group: 'settings'
    },
    defineField({
      title: 'Autore',
      description: 'Inserisci l\'autore della news.',
      name: 'author',
      type: 'string',
      validation: Rule => Rule.required(),
      group: 'settings',
      options: {
        list: [
          { title: 'Redazione La Capitale', value: 'Redazione La Capitale' },
        ],
      }
    }),
    defineField({
      title: 'Minuti di lettura',
      description: 'Inserisci i minuti di lettura necessari.',
      name: 'readingTime',
      type: 'number',
      validation: Rule => Rule.required(),
      group: 'settings',
    }),
    {
      title: 'SEO',
      name: 'seo',
      type: 'seo',
      group: 'seo',
    },

    // field reference to type: 'tags', 'temi', 'quartiere'
    {
      title: 'Tema',
      name: 'tema',
      type: 'reference',
      to: [{ type: 'tema' }],
      validation: Rule => Rule.required(),
      group: 'assegnazioni'
    },

    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'tag' }] }],
      group: 'assegnazioni'
    },

    {
      title: 'Quartieri',
      name: 'quartieri',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'quartiere' }] }],
      group: 'assegnazioni'
    },
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image',
      tema: 'tema.title',
    },
    prepare({ title, image, tema }) {
      return {
        title: title ? title : '',
        subtitle: tema ? `Tema: ${tema}` : '',
        media: image,
      }
    },
  },
}
