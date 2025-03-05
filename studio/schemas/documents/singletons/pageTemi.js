import { BiSolidLayer } from 'react-icons/bi/'
import pageFields from '../pageComponents/pageFields'
import groups from '../groups'

const pageThemeFields = pageFields.filter(field => field.name !== 'slug')

export default {
  title: 'Temi',
  name: 'pageTemi',
  type: 'document',
  icon: BiSolidLayer,

  groups,

  fields: [
    ...pageThemeFields.map(field => field),
  ],
  preview: {
    prepare() {
      return {
        title: 'Pagina Temi',
        media: BiSolidLayer,
      }
    },
  },
}
