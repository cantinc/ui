import { example } from 'src/app/Component'
import { Flex, Space } from 'src/ui'

import description from './README.md'

export default example({
  id: 'couple',
  title: 'Couple space',
  description,
  example: (
    <Flex style='background:red'>
      <div style='background:blue;padding:10px'>Left</div>
      <Space />
      <div style='background:lime;padding:10px'>Mid</div>
      <Space />
      <div style='background:green;padding:10px'>Right</div>
    </Flex>
  ),
})
