import { example } from 'src/app/Component'
import { Flex, Toggle } from 'src/ui'

import description from './README.md'

export default example({
  id: 'disabled',
  title: 'disabled',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Toggle, Flex } from '@cantinc/ui'

innet(
  <Flex gap={16}>
    <Toggle disabled label='Label' />
    <Toggle disabled value label='Label' />
  </Flex>,
  dom,
)`,
  example: (
    <Flex gap={16}>
      <Toggle disabled label='Label' />
      <Toggle disabled value label='Label' />
    </Flex>
  ),
})
