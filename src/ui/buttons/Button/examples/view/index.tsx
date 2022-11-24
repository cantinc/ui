import { example } from 'src/app/Component'
import { Button } from 'src/ui'

import description from './README.md'

export default example({
  id: 'view',
  title: 'View',
  description,
  example: (
    <Button view='secondary'>
      Click Me
    </Button>
  ),
})
