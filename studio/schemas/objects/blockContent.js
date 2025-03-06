import { annotations } from "../content/text/annotations";
import { decorators } from "../content/text/decorators";
import { styles } from "../content/text/styles";

export default {
  title: 'Contenuto',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      type: 'block',
      styles,
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Number', value: 'number' },
      ],
      marks: {
        decorators,
        annotations,
      },
    },
    {
      type: 'image',
      fields: [
        {
          type: 'text',
          name: 'alt',
          title: 'Testo alternativo',
          options: {
            isHighlighted: true,
            rows: 2
          }
        }
      ]
    }
  ]
}