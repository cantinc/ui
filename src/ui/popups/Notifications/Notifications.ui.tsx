import { meta } from 'src/app/Component'

import { Notifications } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof Notifications>({
  component: Notifications,
  description,
  examples,
})
