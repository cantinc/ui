import { example } from 'src/app/Component'
import { Flex, Space } from 'src/ui'

import description from './README.md'

export default example({
  id: 'center',
  title: 'Center',
  description,
  example: (
    <Flex style='background:red'>
      <Space />
      <div style='background:green;padding:10px'>Element</div>
      <Space />
    </Flex>
  ),
})
