import { meta } from 'src/app/Component'

import { Flex } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof Flex>({
  component: Flex,
  name: 'Flex',
  description,
  props: {
    vertical: {
      type: 'switch',
    },
  },
  examples,
})
