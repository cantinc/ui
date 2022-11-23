import { example } from 'src/app/Component'
import { Button, notify } from 'src/ui'

import description from './README.md'

export default example({
  id: 'success',
  title: 'success',
  description,
  example: (
    <Button onclick={() => notify('Success message!', 'success')}>
      Click Me
    </Button>
  ),
})
