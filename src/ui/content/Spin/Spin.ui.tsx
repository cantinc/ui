import { meta } from 'src/app/Component'

import { Spin } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof Spin>({
  component: Spin,
  name: 'Spin',
  description,
  examples,
})
