import { example } from 'src/app/Component'
import { Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Horizontal',
  description,
  example: (
    <Flex style='background:red'>
      <div style='background:blue;padding:10px'>Left</div>
      <div style='background:green;padding:10px'>Right</div>
    </Flex>
  ),
})
