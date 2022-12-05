import { example } from 'src/app/Component'
import { Button, Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'view',
  title: 'View',
  description,
  components: {
    [Flex.name]: 'Flex',
  },
  example: (
    <Flex gap={16} wrap>
      <Button view='primary'>
        Primary
      </Button>
      <Button view='secondary'>
        Secondary
      </Button>
      <Button view='negative'>
        Negative
      </Button>
      <Button view='positive'>
        Positive
      </Button>
    </Flex>
  ),
})
