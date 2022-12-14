import { example } from 'src/app/Component'
import { Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'differentGap',
  title: 'Different gap',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Flex } from '@cantinc/ui'

innet(
  <Flex wrap gap={[16, 32]} style={{ background: 'var(--color-80)', width: '100px' }}>
    <div style={{ background: 'var(--color-20)', padding: '10px' }}>1</div>
    <div style={{ background: 'var(--color-40)', padding: '10px' }}>2</div>
    <div style={{ background: 'var(--color-60)', padding: '10px' }}>3</div>
  </Flex>,
  dom,
)`,
  example: (
    <Flex wrap gap={[16, 32]} style={{ background: 'var(--color-80)', width: '100px' }}>
      <div style={{ background: 'var(--color-20)', padding: '10px' }}>1</div>
      <div style={{ background: 'var(--color-40)', padding: '10px' }}>2</div>
      <div style={{ background: 'var(--color-60)', padding: '10px' }}>3</div>
    </Flex>
  ),
})
