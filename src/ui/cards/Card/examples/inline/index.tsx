import { example } from 'src/app/Component'
import { Card } from 'src/ui'

import description from './README.md'

export default example({
  id: 'inline',
  title: 'Inline',
  description,
  example: (
    <Card inline>Content</Card>
  ),
})
