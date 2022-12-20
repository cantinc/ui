import { example } from 'src/app/Component'
import { Flex, Selector } from 'src/ui'

import description from './README.md'

export default example({
  id: 'input',
  title: 'Input',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Flex, Selector } from '@cantinc/ui'

innet(
  <Flex wrap gap={[0, 16]}>
    <Selector />
    <Selector label='With label' />
    <Selector flex label='Flex' />
  </Flex>,
  dom,
)`,
  example: (
    <Flex wrap gap={[0, 16]}>
      <Selector />
      <Selector label='With label' />
      <Selector flex label='Flex' />
    </Flex>
  ),
})
