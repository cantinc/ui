import { example } from 'src/app/Component'
import { Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'wrap',
  title: 'Wrap',
  description,
  example: (
    <Flex wrap style='background:red;width:150px'>
      <div style='background:blue;padding:10px'>First</div>
      <div style='background:green;padding:10px'>Second</div>
      <div style='background:yellow;padding:10px'>Third</div>
    </Flex>
  ),
})
