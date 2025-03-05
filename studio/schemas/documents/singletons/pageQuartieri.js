import { BiMapPin } from 'react-icons/bi/'
import pageFields from '../pageComponents/pageFields'
import groups from '../groups'

const pageQuartieriFields = pageFields.filter(field => field.name !== 'slug')

export default {
  title: 'Tags',
  name: 'pageQuartieri',
  type: 'document',
  icon: BiMapPin,

  groups,

  fields: [
    ...pageQuartieriFields.map(field => field),
  ],
  preview: {
    prepare() {
      return {
        title: 'Pagina Quartieri di Roma',
        media: BiMapPin,
      }
    },
  },
}
