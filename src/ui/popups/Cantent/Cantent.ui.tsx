import { meta } from 'src/app/Component'

import { Cantent } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof Cantent>({
  component: Cantent,
  name: 'Cantent',
  description,
  examples,
})
