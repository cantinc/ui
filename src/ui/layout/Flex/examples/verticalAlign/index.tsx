import { example } from 'src/app/Component'
import { Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'verticalAlign',
  title: 'Aligning in Vertical Layouts',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Flex } from '@cantinc/ui'

innet(
  <Flex wrap gap={16} style={{ background: 'var(--color-80)' }}>
    <Flex vertical align='center'>
      <div style={{ background: 'var(--color-40)', padding: '24px' }}>align</div>
      <div style={{ background: 'var(--color-60)', padding: '6px' }}>center</div>
    </Flex>
    <Flex vertical align='flex-start'>
      <div style={{ background: 'var(--color-40)', padding: '24px' }}>align</div>
      <div style={{ background: 'var(--color-60)', padding: '6px' }}>flex-start</div>
    </Flex>
    <Flex vertical align='flex-end'>
      <div style={{ background: 'var(--color-40)', padding: '24px' }}>align</div>
      <div style={{ background: 'var(--color-60)', padding: '6px' }}>flex-end</div>
    </Flex>
    <Flex vertical align='stretch'>
      <div style={{ background: 'var(--color-40)', padding: '24px' }}>align</div>
      <div style={{ background: 'var(--color-60)', padding: '6px' }}>stretch</div>
    </Flex>
  </Flex>,
  dom,
)`,
  example: (
    <Flex wrap gap={16} style={{ background: 'var(--color-80)' }}>
      <Flex vertical align='center'>
        <div style={{ background: 'var(--color-40)', padding: '24px' }}>align</div>
        <div style={{ background: 'var(--color-60)', padding: '6px' }}>center</div>
      </Flex>
      <Flex vertical align='flex-start'>
        <div style={{ background: 'var(--color-40)', padding: '24px' }}>align</div>
        <div style={{ background: 'var(--color-60)', padding: '6px' }}>flex-start</div>
      </Flex>
      <Flex vertical align='flex-end'>
        <div style={{ background: 'var(--color-40)', padding: '24px' }}>align</div>
        <div style={{ background: 'var(--color-60)', padding: '6px' }}>flex-end</div>
      </Flex>
      <Flex vertical align='stretch'>
        <div style={{ background: 'var(--color-40)', padding: '24px' }}>align</div>
        <div style={{ background: 'var(--color-60)', padding: '6px' }}>stretch</div>
      </Flex>
    </Flex>
  ),
})
