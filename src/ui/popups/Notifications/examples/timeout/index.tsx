import { example } from 'src/app/Component'
import { Button, notify } from 'src/ui'

import description from './README.md'

export default example({
  id: 'timeout',
  title: 'timeout',
  description,
  example: (
    <Button onclick={() => notify('Custom timeout!', 'success', 13)}>
      Click Me
    </Button>
  ),
})
