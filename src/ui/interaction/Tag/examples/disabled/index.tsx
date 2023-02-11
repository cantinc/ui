import { example } from 'src/app/Component'
import { Flex, Tag } from 'src/ui'

import description from './README.md'

export default example({
  id: 'disabled',
  title: 'disabled',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Tag, Flex } from '@cantinc/ui'

innet(
  <Flex gap={8}>
    <Tag disabled checked label='Checked' />
    <Tag disabled label='Unchecked' />
  </Flex>,
  dom,
)`,
  example: (
    <Flex gap={8}>
      <Tag disabled checked label='Checked' />
      <Tag disabled label='Unchecked' />
    </Flex>
  ),
})
