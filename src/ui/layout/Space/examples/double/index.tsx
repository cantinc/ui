import { example } from 'src/app/Component'
import { Flex, Space } from 'src/ui'

import description from './README.md'

export default example({
  id: 'couple',
  title: 'Couple spaces',
  description,
  code: `import { Flex, Space } from '@cantinc/ui'

return (
  <Flex style='background:var(--color-80)'>
    <div style='background:var(--color-20);padding:10px'>Left</div>
    <Space />
    <div style='background:var(--color-40);padding:10px'>Mid</div>
    <Space />
    <div style='background:var(--color-60);padding:10px'>Right</div>
  </Flex>
)`,
  example: (
    <Flex style='background:var(--color-80)'>
      <div style='background:var(--color-20);padding:10px'>Left</div>
      <Space />
      <div style='background:var(--color-40);padding:10px'>Mid</div>
      <Space />
      <div style='background:var(--color-60);padding:10px'>Right</div>
    </Flex>
  ),
})
