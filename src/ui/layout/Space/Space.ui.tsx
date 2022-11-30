import { meta } from 'src/app/Component'

import { Flex } from '../Flex'
import { Space } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof Space>({
  component: Space,
  name: 'Space',
  description,
  components: {
    [Flex.name]: 'Flex',
  },
  examples,
})
