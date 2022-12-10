import { example } from 'src/app/Component'
import { Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'verticalAlign',
  title: 'vertical & align',
  description,
  code: `import { Flex } from '@cantinc/ui'

return (
  <Flex wrap gap={16} style='background:var(--color-80)'>
    <Flex vertical align='center'>
      <div style='background:var(--color-40);padding:24px'>align</div>
      <div style='background:var(--color-60);padding:6px'>center</div>
    </Flex>
    <Flex vertical align='start'>
      <div style='background:var(--color-40);padding:24px'>align</div>
      <div style='background:var(--color-60);padding:6px'>start</div>
    </Flex>
    <Flex vertical align='end'>
      <div style='background:var(--color-40);padding:24px'>align</div>
      <div style='background:var(--color-60);padding:6px'>end</div>
    </Flex>
    <Flex vertical align='stretch'>
      <div style='background:var(--color-40);padding:24px'>align</div>
      <div style='background:var(--color-60);padding:6px'>stretch</div>
    </Flex>
  </Flex>
)`,
  example: (
    <Flex wrap gap={16} style='background:var(--color-80)'>
      <Flex vertical align='center'>
        <div style='background:var(--color-40);padding:24px'>align</div>
        <div style='background:var(--color-60);padding:6px'>center</div>
      </Flex>
      <Flex vertical align='start'>
        <div style='background:var(--color-40);padding:24px'>align</div>
        <div style='background:var(--color-60);padding:6px'>start</div>
      </Flex>
      <Flex vertical align='end'>
        <div style='background:var(--color-40);padding:24px'>align</div>
        <div style='background:var(--color-60);padding:6px'>end</div>
      </Flex>
      <Flex vertical align='stretch'>
        <div style='background:var(--color-40);padding:24px'>align</div>
        <div style='background:var(--color-60);padding:6px'>stretch</div>
      </Flex>
    </Flex>
  ),
})
