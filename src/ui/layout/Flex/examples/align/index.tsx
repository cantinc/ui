import { example } from 'src/app/Component'
import { Flex } from 'src/ui'

import description from './README.md'

const content = (position: string) => (
  <>
    <div style={{
      height: '48px',
      background: 'var(--color-40)',
      padding: '12px',
    }}>
      align
    </div>
    <div style={{
      background: 'var(--color-60)',
      padding: '6px',
    }}>
      {position}
    </div>
  </>
)

export default example({
  id: 'align',
  title: 'align',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Flex } from '@cantinc/ui'

const content = (position: string) => (
  <>
    <div style={{
      height: '48px',
      background: 'var(--color-40)',
      padding: '12px',
    }}>
      align
    </div>
    <div style={{
      background: 'var(--color-60)',
      padding: '6px',
    }}>
      {position}
    </div>
  </>
)

innet(
  <Flex
    wrap
    gap={16}
    style={{
      background: 'var(--color-80)',
    }}>
    <Flex align='center'>
      {content('center')}
    </Flex>
    <Flex align='start'>
      {content('start')}
    </Flex>
    <Flex align='end'>
      {content('end')}
    </Flex>
    <Flex align='stretch'>
      {content('stretch')}
    </Flex>
    <Flex align='baseline'>
      {content('baseline')}
    </Flex>
  </Flex>,
  dom,
)`,
  example: (
    <Flex
      wrap
      gap={16}
      style={{
        background: 'var(--color-80)',
      }}>
      <Flex align='center'>
        {content('center')}
      </Flex>
      <Flex align='start'>
        {content('start')}
      </Flex>
      <Flex align='end'>
        {content('end')}
      </Flex>
      <Flex align='stretch'>
        {content('stretch')}
      </Flex>
      <Flex align='baseline'>
        {content('baseline')}
      </Flex>
    </Flex>
  ),
})
