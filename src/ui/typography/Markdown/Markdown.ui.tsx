import { meta } from 'src/app/Component'

import { Markdown } from './Markdown'

export default meta<typeof Markdown>({
  component: Markdown,
  props: {
    text: {
      type: 'text',
      description: 'Markdown text',
    },
  },
  examples: [
    {
      id: 'default',
      example: (
        <Markdown text='# Markdown' />
      ),
    },
  ],
})
