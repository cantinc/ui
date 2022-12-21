import { example } from 'src/app/Component'
import { Flex, Icon } from 'src/ui'

import description from './README.md'

export default example({
  id: 'content',
  title: 'Content',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Flex, Icon } from '@cantinc/ui'

innet(
  <Flex vertical gap={16}>
    <Icon icon='gear' size={32}>
      Size: 32
    </Icon>
    <Icon icon='gear' size={28}>
      Size: 28
    </Icon>
    <Icon icon='gear' size={24}>
      Size: 24
    </Icon>
    <Icon icon='gear' size={20}>
      Size: 20
    </Icon>
    <Icon icon='gear' size={16}>
      Size: 16
    </Icon>
    <Icon icon='gear' size={12}>
      Size: 12
    </Icon>
    <Icon icon='gear' size={8}>
      Size: 8
    </Icon>
  </Flex>,
  dom,
)`,
  example: (
    <Flex vertical gap={16}>
      <Icon icon='gear' size={32}>
        Size: 32
      </Icon>
      <Icon icon='gear' size={28}>
        Size: 28
      </Icon>
      <Icon icon='gear' size={24}>
        Size: 24
      </Icon>
      <Icon icon='gear' size={20}>
        Size: 20
      </Icon>
      <Icon icon='gear' size={16}>
        Size: 16
      </Icon>
      <Icon icon='gear' size={12}>
        Size: 12
      </Icon>
      <Icon icon='gear' size={8}>
        Size: 8
      </Icon>
    </Flex>
  ),
})
