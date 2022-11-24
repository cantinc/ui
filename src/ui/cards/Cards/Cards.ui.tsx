import { meta } from 'src/app/Component'

import { Card } from '../Card'
import { Cards } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof Cards>({
  component: Cards,
  name: 'Cards',
  description,
  components: {
    [Card.name]: 'Card',
  },
  examples,
})
