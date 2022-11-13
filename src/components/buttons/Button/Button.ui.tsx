import { meta } from 'src/app/Component'

import { Button } from './Button'

export default meta<typeof Button>({
  component: Button,
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
  examples: {
    default: (
      <Button>Click Me</Button>
    ),
    onclick: (
      <Button
        onclick={() => alert('clicked')}>
        Click Me
      </Button>
    ),
  },
})
