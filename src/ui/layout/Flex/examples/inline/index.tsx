import { example } from 'src/app/Component'
import { Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'inline',
  title: 'Inline',
  description,
  example: (
    <Flex inline padding={16} style='background:var(--color-80)'>
      <div style='background:var(--color-40);padding:10px'>Left</div>
      <div style='background:var(--color-60);padding:10px'>Right</div>
    </Flex>
  ),
})