import { defineField } from 'sanity'
import { BiSolidLayer } from 'react-icons/bi/'
import pageFields from '../pageComponents/pageFields'
import groups from '../groups'


export default {
  title: 'Tema',
  name: 'tema',
  type: 'document',
  icon: BiSolidLayer,
  groups,
  fields: [
    ...pageFields.map(field => field),

    defineField({
      title: 'Descrizione',
      name: 'description',
      type: 'string',
      group: 'settings'
    }),

    defineField({
      title: 'Colore del tema',
      name: 'backgroundColor',
      type: 'simplerColor',
      group: 'settings'
    }),

  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    },
    prepare({ title, media }) {
      return {
        title: title ? title : '',
        media,
      }
    },
  },
}
