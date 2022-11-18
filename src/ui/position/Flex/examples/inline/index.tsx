import { example } from 'src/app/Component'
import { Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'inline',
  title: 'Inline',
  description,
  example: (
    <Flex inline style='background:red;padding:16px'>
      <div style='background:blue;padding:10px'>Left</div>
      <div style='background:green;padding:10px'>Right</div>
    </Flex>
  ),
})
