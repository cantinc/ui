import { meta } from 'src/app/Component'

import { DropdownMenu } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof DropdownMenu>({
  component: DropdownMenu,
  name: 'DropdownMenu',
  description,
  examples,
})
