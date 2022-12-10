import { example } from 'src/app/Component'
import { Button, notify } from 'src/ui'

import description from './README.md'

export default example({
  id: 'error',
  title: 'error',
  description,
  code: `import { Button, notify } from '@cantinc/ui'

return (
  <Button onclick={() => notify('Error message!', 'error')}>
    Click Me
  </Button>
)`,
  example: (
    <Button onclick={() => notify('Error message!', 'error')}>
      Click Me
    </Button>
  ),
})
