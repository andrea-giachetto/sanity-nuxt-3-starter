import { BiFile } from 'react-icons/bi/'
import pageFields from '../pageComponents/pageFields'
import groups from '../groups'
import { defineField } from 'sanity'

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
      description: 'Inserisci i minuti di lettura necessari,.',
      name: 'readingTime',
      type: 'number',
      validation: Rule => Rule.required(),
      group: 'settings',
    }),

    ...pageFields.map(field => field),
    // field true / false "in evidenza"

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
      validation: Rule => Rule.required().min(1),
      group: 'assegnazioni'
    },

    {
      title: 'Quartieri',
      name: 'quartieri',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'quartiere' }] }],
      validation: Rule => Rule.required().min(1),
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
