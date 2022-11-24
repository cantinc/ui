import { example } from 'src/app/Component'
import { Card } from 'src/ui'

import description from './README.md'

export default example({
  id: 'clickable',
  title: 'Clickable',
  description,
  example: (
    <Card inline clickable>
      Content
    </Card>
  ),
})
