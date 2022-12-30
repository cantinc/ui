import { example } from 'src/app/Component'
import { Dots, Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'gap',
  title: 'gap',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Dots, Flex } from '@cantinc/ui'

innet(
  <Flex vertical align='stretch' gap={8}>
    <Dots count={5} gap={0} />
    <Dots count={5} gap={2} />
    <Dots count={5} gap={4} />
    <Dots count={5} gap={8} />
    <Dots count={5} gap={16} />
    <Dots count={5} gap={32} />
  </Flex>,
  dom,
)`,
  example: (
    <Flex vertical align='stretch' gap={8}>
      <Dots count={5} gap={0} />
      <Dots count={5} gap={2} />
      <Dots count={5} gap={4} />
      <Dots count={5} gap={8} />
      <Dots count={5} gap={16} />
      <Dots count={5} gap={32} />
    </Flex>
  ),
})
