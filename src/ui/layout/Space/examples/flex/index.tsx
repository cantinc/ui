import { example } from 'src/app/Component'
import { Flex, Space } from 'src/ui'

import description from './README.md'

export default example({
  id: 'flex',
  title: 'Inside Flex',
  description,
  example: (
    <Flex style='background:var(--color-80)'>
      <div style='background:var(--color-40);padding:10px'>Left</div>
      <Space />
      <div style='background:var(--color-60);padding:10px'>Right</div>
    </Flex>
  ),
})
