import { meta } from 'src/app/Component'

import { Menu } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof Menu>({
  name: 'Menu',
  component: Menu,
  description,
  examples,
})
