import { BiSolidMegaphone } from 'react-icons/bi/'
import { slugify, validateSlug } from '@/utils/helperFunctions.js'

export default {
  title: 'Pubblicità',
  name: 'adv',
  type: 'document',
  icon: BiSolidMegaphone,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    },
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
