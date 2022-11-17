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
  examples: [
    {
      id: 'default',
      example: (
        <Button>Click Me</Button>
      ),
    },
    {
      id: 'on-click',
      example: (
        <Button
          onclick={() => alert('clicked')}>
          Click Me
        </Button>
      ),
    },
  ],
})
