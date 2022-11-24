import { example } from 'src/app/Component'
import { Button, Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'flex',
  title: 'Flex',
  description,
  components: {
    [Flex.name]: 'Flex',
  },
  example: (
    <Flex wrap gap={16}>
      <Button flex>Flex</Button>
      <Button view='secondary'>Usual</Button>
    </Flex>
  ),
})
