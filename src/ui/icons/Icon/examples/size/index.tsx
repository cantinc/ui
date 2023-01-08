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
    <Icon size={32} />
    <Icon size={28} />
    <Icon size={24} />
    <Icon size={20} />
    <Icon size={16} />
    <Icon size={12} />
    <Icon size={8} />
  </Flex>,
  dom,
)`,
  example: (
    <Flex gap={16} wrap>
      <Icon size={32} />
      <Icon size={28} />
      <Icon size={24} />
      <Icon size={20} />
      <Icon size={16} />
      <Icon size={12} />
      <Icon size={8} />
    </Flex>
  ),
})
