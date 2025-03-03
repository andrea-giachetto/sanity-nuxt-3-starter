import { BiFile } from 'react-icons/bi/'
import pageFields from '../pageComponents/pageFields'
import groups from '../groups'

export default {
	title: 'Page',
	name: 'page',
	type: 'document',
	icon: BiFile,
	groups,
	fields: pageFields.map(field => field),
	preview: {
		select: {
			title: 'title',
		},
		prepare({ title }) {
			return {
				title: title ? title : '',
				media: BiFile,
			}
		},
	},
}
