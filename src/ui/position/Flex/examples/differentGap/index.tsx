import { example } from 'src/app/Component'
import { Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'differentGap',
  title: 'Different gap',
  description,
  example: (
    <Flex wrap gap={[16, 32]} style='background:red;width:100px'>
      <div style='background:blue;padding:10px'>1</div>
      <div style='background:green;padding:10px'>2</div>
      <div style='background:yellow;padding:10px'>3</div>
    </Flex>
  ),
})
