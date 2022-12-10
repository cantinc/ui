import { example } from 'src/app/Component'
import { Button, Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'view',
  title: 'View',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Flex, Button } from '@cantinc/ui'

innet(
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
  </Flex>,
  dom,
)`,
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
