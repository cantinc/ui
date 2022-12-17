import { meta } from 'src/app/Component'

import { Checkbox } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof Checkbox>({
  component: Checkbox,
  name: 'Checkbox',
  description,
  examples,
})
