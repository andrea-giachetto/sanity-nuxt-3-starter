import { BiPurchaseTagAlt } from 'react-icons/bi/'
import pageFields from '../pageComponents/pageFields'
import groups from '../groups'

export default {
  title: 'Tag',
  name: 'tag',
  type: 'document',
  icon: BiPurchaseTagAlt,
  groups,
  fields: [
    ...pageFields.map(field => field),

    {
      name: 'backgroundColor',
      title: 'Colore del tag',
      type: 'simplerColor',
      group: 'settings'
    },
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
