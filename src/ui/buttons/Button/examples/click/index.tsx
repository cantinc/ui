import { example } from 'src/app/Component'
import { Button } from 'src/ui'

import description from './README.md'

export default example({
  id: 'click',
  title: 'Clickable',
  description,
  example: (
    <Button
      onclick={() => alert('clicked')}>
      Click Me
    </Button>
  ),
})
