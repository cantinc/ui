import { meta } from 'src/app/Component'

import { Popout } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof Popout>({
  component: Popout,
  name: 'Popout',
  description,
  examples,
})
