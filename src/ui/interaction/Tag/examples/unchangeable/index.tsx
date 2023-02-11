import { example } from 'src/app/Component'
import { Flex, Tag } from 'src/ui'

import description from './README.md'

export default example({
  id: 'unchangeable',
  title: 'Unchangeable',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Tag, Flex } from '@cantinc/ui'

innet(
  <Flex gap={8}>
    <Tag checked label='Checked' />
    <Tag checked={false} label='Unchecked' />
  </Flex>,
  dom,
)`,
  example: (
    <Flex gap={8}>
      <Tag checked label='Checked' />
      <Tag checked={false} label='Unchecked' />
    </Flex>
  ),
})
