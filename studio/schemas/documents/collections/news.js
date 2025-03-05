import { BiFile } from 'react-icons/bi/'
import pageFields from '../pageComponents/pageFields'
import groups from '../groups'

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
    ...pageFields.map(field => field),

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
    },
    prepare({ title }) {
      return {
        title: title ? title : '',
        media: BiFile,
      }
    },
  },
}
