import { example } from 'src/app/Component'
import { Flex, Space } from 'src/ui'

import description from './README.md'

export default example({
  id: 'center',
  title: 'Center',
  description,
  example: (
    <Flex style='background:var(--color-80)'>
      <Space />
      <div style='background:var(--color-60);padding:10px'>Element</div>
      <Space />
    </Flex>
  ),
})