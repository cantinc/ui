import { meta } from 'src/app/Component'

import { Toggle } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof Toggle>({
  component: Toggle,
  name: 'Toggle',
  description,
  examples,
})
