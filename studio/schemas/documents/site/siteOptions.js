import { BiSliderAlt } from 'react-icons/bi/'

export default {
	name: 'siteOptions',
	type: 'document',
	title: 'Options',
	icon: BiSliderAlt,
	groups: [
		{
			title: 'Header',
			name: 'header',
			default: true,
		},
		{
			title: 'Footer',
			name: 'footer',
		},
	],
	fields: [

	],
	preview: {
		prepare({ }) {
			return {
				title: 'Options',
			}
		},
	},
}
