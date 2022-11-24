import { example } from 'src/app/Component'
import { Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'vertical',
  title: 'Vertical',
  description,
  example: (
    <Flex vertical style='background:var(--color-80)'>
      <div style='background:var(--color-40);padding:10px'>Top</div>
      <div style='background:var(--color-60);padding:10px'>Down</div>
    </Flex>
  ),
})
