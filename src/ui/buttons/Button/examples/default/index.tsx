import { example } from 'src/app/Component'
import { Button } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import { Button } from '@cantinc/ui'

export default (
  <Button>Click Me</Button>
)`,
  example: (
    <Button>Click Me</Button>
  ),
})
