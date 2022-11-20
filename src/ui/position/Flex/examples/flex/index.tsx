import { example } from 'src/app/Component'
import { Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'flex',
  title: 'Flex',
  description,
  example: (
    <Flex>
      <Flex flex={2} style='background:blue;padding:10px'>Left</Flex>
      <Flex flex style='background:green;padding:10px'>Right</Flex>
    </Flex>
  ),
})
