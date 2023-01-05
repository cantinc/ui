import { example } from 'src/app/Component'
import { Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'flex',
  title: 'Flex',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Flex } from '@cantinc/ui'

innet(
  <Flex>
    <Flex
      flex={2}
      padding={10}
      style={{ background: 'var(--color-80)' }}>
      66%
    </Flex>
    <Flex
      flex
      padding={10}
      style={{ background: 'var(--color-60)' }}>
      33%
    </Flex>
  </Flex>,
  dom,
)`,
  example: (
    <Flex>
      <Flex
        flex={2}
        padding={10}
        style={{ background: 'var(--color-80)' }}>
        66%
      </Flex>
      <Flex
        flex
        padding={10}
        style={{ background: 'var(--color-60)' }}>
        33%
      </Flex>
    </Flex>
  ),
})
