import { BiHome, BiMessage } from 'react-icons/bi/'
import pageFields from '../pageComponents/pageFields'

const pageContactFields = pageFields

export default {
  title: 'Contatti',
  name: 'pageContatti',
  type: 'document',
  icon: BiMessage,

  groups: [
    {
      title: 'Content',
      name: 'content',
      default: true,
    },
    {
      title: 'SEO',
      name: 'seo',
    },
  ],

  fields: [
    // {
    // 	title: 'Featured Projects',
    // 	name: 'projects',
    // 	type: 'array',
    // 	of: [
    // 		{
    // 			type: 'reference',
    // 			to: [{ type: 'project' }],
    // 			options: {
    // 				disableNew: true,
    // 			},
    // 		},
    // 	],

    // 	validation: (Rule) => Rule.unique(),
    // },

    ...pageContactFields.map(field => field),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home',
        media: BiHome,
      }
    },
  },
}
