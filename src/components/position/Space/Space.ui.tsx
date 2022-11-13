import { meta } from 'src/app/Component'

import { Flex } from '../Flex'
import { Space } from '.'

export default meta<typeof Space>({
  component: Space,
  examples: {
    default: (
      <Flex>
        <div>1</div>
        <Space />
        <div>2</div>
      </Flex>
    ),
  },
})
