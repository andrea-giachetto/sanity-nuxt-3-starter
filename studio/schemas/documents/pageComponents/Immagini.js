import { defineArrayMember, defineType, defineField } from 'sanity'

let title = 'Immagini'

const Immagini = defineType({
  title,
  name: title.charAt(0).toLowerCase() + title.slice(1),
  type: 'object',
  fields: [
    defineField({
      title: 'Layout',
      description: 'Fai riferimento al documento "Specifiche Tecniche" per vedere il layout di ogni opzione',
      name: 'layout',
      type: 'string',
      options: {
        list: [
          { title: 'Fullscreen', value: 'fullscreen' },
          { title: '1 colonna', value: '1-col' },
          { title: '2 colonne', value: '2-cols' },
          { title: '3 colonne', value: '3-cols' },
        ],
      },
    }),
    defineField({
      title: 'Immagine Fullscreen con caption',
      name: 'fullscreen',
      type: 'object',
      hidden: ({ parent }) => parent?.layout !== 'fullscreen',
      fields: [
        defineField({
          title: 'Immagine',
          name: 'image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          title: 'Caption',
          name: 'caption',
          type: 'string',
        }),
      ]
    }),

    defineField({
      title: 'Immagine dentro Container con caption',
      name: 'container',
      type: 'object',
      hidden: ({ parent }) => parent?.layout !== '1-col',
      fields: [
        defineField({
          title: 'Immagine',
          name: 'image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          title: 'Caption',
          name: 'caption',
          type: 'string',
        }),
      ]
    }),

    defineField({
      title: 'Immagini con caption a 2 colonne',
      name: 'twoCols',
      type: 'object',
      hidden: ({ parent }) => parent?.layout !== '2-cols',
      fields: [
        defineField({
          title: 'Prima Immagine',
          name: 'image1',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          title: 'Caption',
          name: 'caption1',
          type: 'string',
        }),

        defineField({
          title: 'Seconda Immagine',
          name: 'image2',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          title: 'Caption',
          name: 'caption2',
          type: 'string',
        }),
      ]
    }),

    defineField({
      title: 'Immagini con caption a 3 colonne',
      name: 'threeCols',
      type: 'object',
      hidden: ({ parent }) => parent?.layout !== '3-cols',
      fields: [
        defineField({
          title: 'Prima Immagine',
          name: 'image1',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          title: 'Caption',
          name: 'caption1',
          type: 'string',
        }),

        defineField({
          title: 'Seconda Immagine',
          name: 'image2',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          title: 'Caption',
          name: 'caption2',
          type: 'string',
        }),

        defineField({
          title: 'Terza Immagine',
          name: 'image3',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          title: 'Caption',
          name: 'caption3',
          type: 'string',
        }),
      ]
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: '',
    },
    prepare({ title }) {
      return {
        title: "Immagini",
      }
    },
  }
})

export default Immagini
