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

    {
      name: 'backgroundColor',
      title: 'Colore del tema',
      type: 'simplerColor',
      group: 'settings'
    },

  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title ? title : '',
        media: BiSolidLayer,
      }
    },
  },
}
