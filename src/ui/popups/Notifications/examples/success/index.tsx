import { example } from 'src/app/Component'
import { Button, notify } from 'src/ui'

import description from './README.md'

export default example({
  id: 'success',
  title: 'success',
  description,
  code: `import { Button, notify } from '@cantinc/ui'

return (
  <Button onclick={() => notify('Success message!', 'success')}>
    Click Me
  </Button>
)`,
  example: (
    <Button onclick={() => notify('Success message!', 'success')}>
      Click Me
    </Button>
  ),
})
