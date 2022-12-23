import { meta } from 'src/app/Component'

import { Pages } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof Pages>({
  component: Pages,
  name: 'Pages',
  description,
  examples,
})
