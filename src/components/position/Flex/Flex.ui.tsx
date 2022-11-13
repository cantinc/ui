import { meta } from 'src/app/Component'

import { Flex } from '.'

export default meta<typeof Flex>({
  component: Flex,
  examples: {
    default: (
      <Flex>
        <div>1</div>
        <div>2</div>
      </Flex>
    ),
    vertical: (
      <Flex vertical>
        <div>1</div>
        <div>2</div>
      </Flex>
    ),
  },
})
