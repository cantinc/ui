import { meta } from 'src/app/Component'

import { Card } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof Card>({
  component: Card,
  name: 'Card',
  description,
  examples,
})