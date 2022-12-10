import { example } from 'src/app/Component'
import { Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'padding',
  title: 'padding',
  description,
  code: `import { Flex } from '@cantinc/ui'

return (
  <Flex vertical style='color:var(--color-100)'>
    <Flex padding={16} style='background:var(--color-90)'>
      <div style='background:var(--color-20);padding:10px'>16</div>
    </Flex>
    <Flex padding={[16, 32]} style='background:var(--color-80)'>
      <div style='background:var(--color-20);padding:10px'>[16, 32]</div>
    </Flex>
    <Flex padding={[8, 16, 32]} style='background:var(--color-70)'>
      <div style='background:var(--color-20);padding:10px'>[8, 16, 32]</div>
    </Flex>
    <Flex padding={[0, 8, 16, 32]} style='background:var(--color-60)'>
      <div style='background:var(--color-20);padding:10px'>[0, 8, 16, 32]</div>
    </Flex>
  </Flex>
)`,
  example: (
    <Flex vertical style='color:var(--color-100)'>
      <Flex padding={16} style='background:var(--color-90)'>
        <div style='background:var(--color-20);padding:10px'>16</div>
      </Flex>
      <Flex padding={[16, 32]} style='background:var(--color-80)'>
        <div style='background:var(--color-20);padding:10px'>[16, 32]</div>
      </Flex>
      <Flex padding={[8, 16, 32]} style='background:var(--color-70)'>
        <div style='background:var(--color-20);padding:10px'>[8, 16, 32]</div>
      </Flex>
      <Flex padding={[0, 8, 16, 32]} style='background:var(--color-60)'>
        <div style='background:var(--color-20);padding:10px'>[0, 8, 16, 32]</div>
      </Flex>
    </Flex>
  ),
})
