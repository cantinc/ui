import { example } from 'src/app/Component'
import { Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'vertical',
  title: 'Vertical',
  description,
  example: (
    <Flex vertical style='background:red'>
      <div style='background:blue;padding:10px'>Top</div>
      <div style='background:green;padding:10px'>Down</div>
    </Flex>
  ),
})
