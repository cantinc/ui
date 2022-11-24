import { example } from 'src/app/Component'
import { Button, Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'danger',
  title: 'Danger',
  description,
  components: {
    [Flex.name]: 'Flex',
  },
  example: (
    <Flex gap={16} wrap>
      <Button danger>Primary</Button>
      <Button view='secondary' danger>Secondary</Button>
    </Flex>
  ),
})
