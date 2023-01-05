import { example } from 'src/app/Component'
import { Flex } from 'src/ui'

import description from './README.md'

const content = (
  <>
    <div style={{ background: 'var(--color-40)', padding: '12px' }}>align</div>
    <div style={{ background: 'var(--color-60)', padding: '6px' }}>center</div>
  </>
)

export default example({
  id: 'align',
  title: 'align',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Flex } from '@cantinc/ui'

const content = (
  <>
    <div style={{ background: 'var(--color-40)', padding: '12px' }}>align</div>
    <div style={{ background: 'var(--color-60)', padding: '6px' }}>center</div>
  </>
)

innet(
  <Flex wrap gap={16} style={{ background: 'var(--color-80)' }}>
    <Flex align='center'>
      {content}
    </Flex>
    <Flex align='start'>
      {content}
    </Flex>
    <Flex align='end'>
      {content}
    </Flex>
    <Flex align='stretch'>
      {content}
    </Flex>
  </Flex>,
  dom,
)`,
  example: (
    <Flex wrap gap={16} style={{ background: 'var(--color-80)' }}>
      <Flex align='center'>
        {content}
      </Flex>
      <Flex align='start'>
        {content}
      </Flex>
      <Flex align='end'>
        {content}
      </Flex>
      <Flex align='stretch'>
        {content}
      </Flex>
    </Flex>
  ),
})
