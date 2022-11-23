import { meta } from 'src/app/Component'

import { Divider } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof Divider>({
  component: Divider,
  name: 'Divider',
  description,
  examples,
})
