import { BiHome } from 'react-icons/bi/'
import pageFields from '../pageComponents/pageFields'
import groups from '../groups'
const pageHomeFields = pageFields.filter(field => field.name !== 'slug')

export default {
	title: 'Home',
	name: 'pageHome',
	type: 'document',
	icon: BiHome,
	groups,
	fields: [
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
