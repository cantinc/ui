import { meta } from 'src/app/Component'
import { Button } from 'src/ui'

import { Notifications } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof Notifications>({
  component: Notifications,
  name: 'Notifications',
  description,
  components: {
    [Button.name]: 'Button',
  },
  examples,
})
