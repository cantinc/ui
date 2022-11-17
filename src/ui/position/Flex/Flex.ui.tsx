import { meta } from 'src/app/Component'

import { Flex } from '.'

export default meta<typeof Flex>({
  component: Flex,
  examples: [
    {
      id: 'default',
      title: 'Horizontal',
      example: (
        <Flex>
          <div>1</div>
          <div>2</div>
        </Flex>
      ),
    },
    {
      id: 'vertical',
      title: 'Vertical',
      example: (
        <Flex vertical>
          <div>1</div>
          <div>2</div>
        </Flex>
      ),
    },
  ],
})
