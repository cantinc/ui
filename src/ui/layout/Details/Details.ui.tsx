import { meta } from 'src/app/Component'

import { Details } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof Details>({
  component: Details,
  name: 'Details',
  description,
  examples,
})
