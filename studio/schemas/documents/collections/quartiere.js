import { BiMapPin } from 'react-icons/bi/'
import pageFields from '../pageComponents/pageFields'
import groups from '../groups'

export default {
  title: 'Quartiere',
  name: 'quartiere',
  type: 'document',
  icon: BiMapPin,
  groups: [
    ...groups,
    {
      title: 'Localizzazione',
      name: 'localization',
    }
  ],
  fields: [
    ...pageFields.map(field => field),

    {
      name: 'backgroundColor',
      title: 'Colore del quartiere',
      type: 'simplerColor',
      group: 'settings'
    },

    {
      title: 'Localizzazione',
      name: 'localization',
      type: 'geopoint',
      group: 'localization',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title ? title : '',
        media: BiMapPin,
      }
    },
  },
}
