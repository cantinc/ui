import { meta } from 'src/app/Component'

import { Drawers } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof Drawers>({
  component: Drawers,
  name: 'Drawers',
  description,
  examples,
})
