import { meta } from 'src/app/Component'

import { Selector } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof Selector>({
  component: Selector,
  name: 'Selector',
  description,
  examples,
})
