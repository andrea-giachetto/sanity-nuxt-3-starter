export default {
	title: 'SEO',
	name: 'seo',
	type: 'object',
	fields: [
		{
			title: 'Meta Title',
			name: 'metaTitle',
			type: 'text',
			rows: 3

		},
		{
			title: 'Meta Description',
			name: 'metaDescription',
			type: 'text',
			rows: 3
		},
		// {
		// 	title: 'Meta Keywords',
		// 	name: 'metaKeywords',
		// 	type: 'array',
		// 	of: [{ type: 'string' }],
		// 	options: {
		// 		layout: 'tags',
		// 	},
		// }
	],
}
