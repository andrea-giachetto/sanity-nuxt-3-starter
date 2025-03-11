import { defineField, defineType } from "sanity";

export const newsType = defineType({
  title: 'Notizia',
  description: 'Seleziona direttamente la notizia o la tipologia di contenuto che vuoi visualizzare.',
  name: 'newsType',
  type: 'object',
  validation: Rule => Rule.required(),
  options: {
    collapsed: true,
    collapsible: true,
    columns: 2,
  },
  fields: [
    defineField({
      title: 'Selezione della Notizia: Manuale o Automatico',
      description: 'Se manuale, potrai selezionare quale notizia visualizzare. Se automatica, verrà visualizzata la notizia più recente in base il tema, quartiere o tag selezionato.',
      name: 'selection',
      type: 'string',
      options: {
        list: [
          { title: 'Manuale', value: 'manual' },
          { title: 'Automatico', value: 'automatic' },
        ],
      }
    }),
    // if manual, select reference to news
    defineField({
      title: 'Notizia',
      name: 'news',
      type: 'reference',
      to: [{ type: 'news' }],
      // hidden
      hidden: ({ parent }) => {
        if (!parent?.selection) return true;

        return parent?.selection === 'automatic'
      },
    }),
    defineField({
      title: 'Come selezionare la notizia',
      description: 'In modalità automatica, dovrai selezionare il tema, quartiere o tag dell\'ultima notizia impostata in evidenza.',
      name: 'selectBy',
      type: 'string',
      options: {
        list: [
          { title: 'Tema', value: 'tema' },
          { title: 'Quartiere', value: 'quartiere' },
          { title: 'Tag', value: 'tag' },
        ],
      },
      hidden: ({ parent }) => {
        if (!parent?.selection) return true;

        return parent?.selection === 'manual'
      },
    }),
    defineField({
      title: 'Tema',
      name: 'tema',
      type: 'reference',
      to: [{ type: 'tema' }],
      hidden: ({ parent }) => {
        if (!parent?.selection || !parent?.selectBy) return true;

        return parent?.selection === 'manual' || (parent?.selectBy === 'quartiere' || parent?.selectBy === 'tag')
      },
    }),
    defineField({
      title: 'Quartieri',
      name: 'quartieri',
      type: 'reference',
      to: [{ type: 'quartiere' }],
      hidden: ({ parent }) => {
        if (!parent?.selection || !parent?.selectBy) return true;

        return parent?.selection === 'manual' || (parent?.selectBy === 'tema' || parent?.selectBy === 'tag')
      },
    }),
    defineField({
      title: 'Tags',
      name: 'tags',
      type: 'reference',
      to: [{ type: 'tag' }],
      hidden: ({ parent }) => {
        if (!parent?.selection || !parent?.selectBy) return true;

        return parent?.selection === 'manual' || (parent?.selectBy === 'quartiere' || parent?.selectBy === 'tema')
      },
    }),
  ],
  preview: {
    select: {
      selection: 'selection',
      selectBy: 'selectBy',
      tema: 'tema.title',
      quartieri: 'quartieri.title',
      tags: 'tags.title',
      newsTitle: 'news.title',
      newsImage: 'news.image',
      temaImage: 'tema.image',
      quartieriImage: 'quartieri.image',
      tagsImage: 'tags.image',
    },
    prepare({ selection, selectBy, tema, quartieri, tags, newsTitle, newsImage, temaImage, quartieriImage, tagsImage }) {
      let subtitle, title, media;

      if (selection === 'automatic') {
        // crea un metodo che rende uppercase la prima lettera di una stringa
        const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
        title = `${capitalize(selectBy)}: ${selectBy === 'tema' ? tema : selectBy === 'quartiere' ? quartieri : tags}`;
        subtitle = 'Selezione automatica';
        media = selectBy === 'tema' ? temaImage : selectBy === 'quartiere' ? quartieriImage : tagsImage;
      }

      if (selection === 'manual') {
        title = newsTitle;
        subtitle = 'Selezione manuale';
        media = newsImage;
      }

      return {
        title,
        subtitle,
        media,
      }
    },
  }
});
