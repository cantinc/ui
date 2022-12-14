import { example } from 'src/app/Component'
import { Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'reverse',
  title: 'reverse',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Flex } from '@cantinc/ui'

innet(
  <Flex reverse style={{ background: 'var(--color-80)' }}>
    <div style={{ background: 'var(--color-20)', padding: '10px' }}>First</div>
    <div style={{ background: 'var(--color-40)', padding: '10px' }}>Second</div>
    <div style={{ background: 'var(--color-60)', padding: '10px' }}>Third</div>
  </Flex>,
  dom,
)`,
  example: (
    <Flex reverse style={{ background: 'var(--color-80)' }}>
      <div style={{ background: 'var(--color-20)', padding: '10px' }}>First</div>
      <div style={{ background: 'var(--color-40)', padding: '10px' }}>Second</div>
      <div style={{ background: 'var(--color-60)', padding: '10px' }}>Third</div>
    </Flex>
  ),
})
