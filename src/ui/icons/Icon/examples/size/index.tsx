import { example } from 'src/app/Component'
import { Flex, Icon } from 'src/ui'

import description from './README.md'

export default example({
  id: 'size',
  title: 'size',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Flex, Icon } from '@cantinc/ui'

innet(
  <Flex gap={16} wrap>
    <Icon icon='cross' size={32} />
    <Icon icon='cross' size={28} />
    <Icon icon='cross' size={24} />
    <Icon icon='cross' size={20} />
    <Icon icon='cross' size={16} />
    <Icon icon='cross' size={12} />
    <Icon icon='cross' size={8} />
  </Flex>,
  dom,
)`,
  example: (
    <Flex gap={16} wrap>
      <Icon icon='cross' size={32} />
      <Icon icon='cross' size={28} />
      <Icon icon='cross' size={24} />
      <Icon icon='cross' size={20} />
      <Icon icon='cross' size={16} />
      <Icon icon='cross' size={12} />
      <Icon icon='cross' size={8} />
    </Flex>
  ),
})
