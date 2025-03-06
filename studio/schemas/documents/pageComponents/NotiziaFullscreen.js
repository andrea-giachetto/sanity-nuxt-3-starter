import { defineArrayMember, defineType, defineField } from 'sanity'

const NotiziaFullscreen = defineType({
  title: "Notizia Fullscreen",
  name: "NotiziaFullscreen",
  type: 'object',
  fields: [
    defineField({
      title: 'Notizia',
      description: 'Seleziona la notizia da visualizzare a schermo intero.',
      name: 'news',
      type: 'reference',
      to: [{ type: 'news' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: '',
    },
    prepare({ title }) {
      return {
        title: 'Notizia Fullscreen',
      }
    },
  }
})

export default NotiziaFullscreen
