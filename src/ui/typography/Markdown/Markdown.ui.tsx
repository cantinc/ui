import { meta } from 'src/app/Component'

import examples from './examples'
import { Markdown } from './Markdown'
import description from './README.md'

export default meta<typeof Markdown>({
  component: Markdown,
  name: 'Markdown',
  description,
  props: {
    text: {
      type: 'text',
      description: 'Markdown text',
    },
  },
  examples,
})
