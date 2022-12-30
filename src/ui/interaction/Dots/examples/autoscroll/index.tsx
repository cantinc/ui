import { example } from 'src/app/Component'
import { Dots, Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'autoscroll',
  title: 'autoscroll',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Dots, Flex } from '@cantinc/ui'

innet(
  <Flex gap={16} align='stretch' vertical>
    <Dots count={5} progress autoscroll={3200} />
    <Dots count={5} progress autoscroll />
  </Flex>,
  dom,
)`,
  example: (
    <Flex gap={16} align='stretch' vertical>
      <Dots count={5} progress autoscroll={3200} />
      <Dots count={5} progress autoscroll />
    </Flex>
  ),
})
