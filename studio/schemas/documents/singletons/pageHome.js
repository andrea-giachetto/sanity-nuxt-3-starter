import { BiHome } from 'react-icons/bi/'
import pageFields from '../pageComponents/pageFields'

const pageHomeFields = pageFields.filter(field => field.name !== 'slug')

export default {
	title: 'Home',
	name: 'pageHome',
	type: 'document',
	icon: BiHome,

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

		...pageHomeFields.map(field => field),
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
