import { BiPurchaseTagAlt } from 'react-icons/bi/'
import pageFields from '../pageComponents/pageFields'
import groups from '../groups'

const pageTagsFields = pageFields.filter(field => field.name !== 'slug')

export default {
  title: 'Tags',
  name: 'pageTags',
  type: 'document',
  icon: BiPurchaseTagAlt,

  groups,

  fields: [
    ...pageTagsFields.map(field => field),
  ],
  preview: {
    prepare() {
      return {
        title: 'Pagina Tags',
        media: BiPurchaseTagAlt,
      }
    },
  },
}
