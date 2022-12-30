import { example } from 'src/app/Component'
import { Dots, Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'size',
  title: 'size',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Dots, Flex } from '@cantinc/ui'

innet(
  <Flex gap={8} vertical align='stretch'>
    <Dots count={5} size={1} />
    <Dots count={5} size={2} />
    <Dots count={5} size={4} />
    <Dots count={5} size={8} />
    <Dots count={5} size={12} />
    <Dots count={5} size={16} />
    <Dots count={5} size={24} />
  </Flex>,
  dom,
)`,
  example: (
    <Flex gap={8} vertical align='stretch'>
      <Dots count={5} size={1} />
      <Dots count={5} size={2} />
      <Dots count={5} size={4} />
      <Dots count={5} size={8} />
      <Dots count={5} size={12} />
      <Dots count={5} size={16} />
      <Dots count={5} size={24} />
    </Flex>
  ),
})
