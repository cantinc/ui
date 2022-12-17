import { example } from 'src/app/Component'
import { Flex, Radiobox } from 'src/ui'

import description from './README.md'

export default example({
  id: 'label',
  title: 'label',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Radiobox, Flex } from '@cantinc/ui'

innet(
  <Flex gap={16} wrap inline>
    <Radiobox
      name='test'
      label='Test 1'
    />
    <Radiobox
      name='test'
      label='Test 2'
    />
    <Radiobox
      name='test'
      label='Test 3'
    />
  </Flex>,
  dom,
)`,
  example: (
    <Flex gap={16} wrap inline>
      <Radiobox
        name='test'
        label='Test 1'
      />
      <Radiobox
        name='test'
        label='Test 2'
      />
      <Radiobox
        name='test'
        label='Test 3'
      />
    </Flex>
  ),
})
