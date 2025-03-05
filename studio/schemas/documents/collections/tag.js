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
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title ? title : '',
        media: BiPurchaseTagAlt,
      }
    },
  },
}
