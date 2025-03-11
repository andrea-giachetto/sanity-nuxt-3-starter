import { BiSolidMegaphone } from 'react-icons/bi/'
import { defineField, defineArrayMember } from 'sanity'

export default {
  title: 'Pubblicità',
  name: 'adv',
  type: 'document',
  icon: BiSolidMegaphone,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Insert list of Images',
      name: 'list',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Slide con Link',
          name: 'slide',
          type: 'object',
          fields: [
            defineField({
              title: 'Immagine',
              name: 'image',
              type: 'image',
            }),
            defineField({
              title: 'URL',
              name: 'url',
              type: 'url',
            }),
          ],
          // preview: {
          //   select: {
          //     title: 'picture.alt',
          //   },
          //   prepare({ title }) {
          //     return {
          //       title: title || 'Picture',
          //     }
          //   }
          // }
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title ? title : '',
        media: BiSolidMegaphone,
      }
    },
  },
}
