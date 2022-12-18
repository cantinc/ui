import { meta } from 'src/app/Component'

import { Dropdown } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof Dropdown>({
  component: Dropdown,
  name: 'Dropdown',
  description,
  examples,
})
