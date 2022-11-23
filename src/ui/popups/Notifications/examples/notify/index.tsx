import { example } from 'src/app/Component'
import { Button, notify } from 'src/ui'

import description from './README.md'

export default example({
  id: 'notify',
  title: 'notify',
  description,
  example: (
    <Button onclick={() => notify('Hello World!')}>
      Click Me
    </Button>
  ),
})
