import { example } from 'src/app/Component'
import { Card } from 'src/ui'

import description from './README.md'

export default example({
  id: 'onclick',
  title: 'onclick',
  description,
  example: (
    <Card inline onclick={() => alert('clicked')}>
      Click me
    </Card>
  ),
})
