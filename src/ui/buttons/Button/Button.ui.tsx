import { meta } from 'src/app/Component'

import { Button } from './Button'
import examples from './examples'
import description from './README.md'

export default meta<typeof Button>({
  component: Button,
  name: 'Button',
  description,
  props: {
    view: {
      type: 'select',
      values: ['primary', 'secondary'],
      description: 'Type of the button view',
    },
    type: {
      type: 'select',
      values: ['button', 'reset', 'submit'],
      description: 'Html type of the button',
    },
  },
  examples,
})
