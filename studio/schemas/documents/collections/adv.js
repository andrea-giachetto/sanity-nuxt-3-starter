import { BiSolidMegaphone } from 'react-icons/bi/'
import { slugify, validateSlug } from '@/utils/helperFunctions.js'
import { defineField } from 'sanity'

export default {
  title: 'Pubblicità',
  name: 'adv',
  type: 'document',
  icon: BiSolidMegaphone,
  fields: [
    defineField({
      title: 'Titolo',
      description: 'Inserisci il titolo della pubblicità. Questo campo serve solo come anteprima per la lista per riconoscere la pubblicità specifica nella lista di pubblicità.',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    // array of objects, with fields for each object (image and link)
    defineField({
      title: 'Immagini',
      description: 'Carica le immagini della pubblicità.',
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              title: 'Link',
              name: 'link',
              type: 'url',
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
      validation: Rule => Rule.required(),
    })
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title ? title : '',
        media: BiSolidMegaphone,
      }
    },
  },
}
