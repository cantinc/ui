import { example } from 'src/app/Component'
import { Button, Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'flex',
  title: 'Flex',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Flex, Button } from '@cantinc/ui'

innet(
  <Flex wrap gap={16}>
    <Button flex>Flex</Button>
    <Button view='secondary'>Usual</Button>
  </Flex>,
  dom,
)`,
  example: (
    <Flex wrap gap={16}>
      <Button flex>Flex</Button>
      <Button view='secondary'>Usual</Button>
    </Flex>
  ),
})
