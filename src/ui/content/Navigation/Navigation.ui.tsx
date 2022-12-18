import { meta } from 'src/app/Component'

import { Navigation } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof Navigation>({
  name: 'Menu',
  component: Navigation,
  description,
  examples,
})
