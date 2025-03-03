import { BiFile } from 'react-icons/bi/'
import { slugify, validateSlug } from '@/utils/helperFunctions.js'
import { defineField } from 'sanity'

export default {
  title: 'Tema',
  name: 'tema',
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
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: slugify,
      },
      validation: validateSlug,
      group: 'content',
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'editorTextMedia',
      group: 'content',
    }),
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }),
  ],
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
