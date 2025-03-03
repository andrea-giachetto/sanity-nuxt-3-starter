import { BiFile } from 'react-icons/bi/'
import { defineType, defineField } from 'sanity'
import { slugify, validateSlug } from '@/utils/helperFunctions.js'
import pageFields from '../pageComponents/pageFields'

export default {
	title: 'Page',
	name: 'page',
	type: 'document',
	icon: BiFile,
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
