import { Alert, Button } from 'src'
import { example } from 'src/app/Component'

import description from './README.md'

export default example({
  id: 'button',
  title: 'Button',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Alert, Button } from '@cantinc/ui'

innet(
  <Alert gap={24} flex>
    New version is available!
    <Button view='ghost' padding={16}>
      Update
    </Button>
  </Alert>,
  dom,
)`,
  example: (
    <Alert gap={24} flex>
      New version is available!
      <Button view='ghost' padding={16}>
        Update
      </Button>
    </Alert>
  ),
})
