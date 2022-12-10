import { example } from 'src/app/Component'
import { Card } from 'src/ui'

import description from './README.md'

export default example({
  id: 'clickable',
  title: 'Clickable',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Card } from '@cantinc/ui'

innet(
  <Card inline clickable>
    Content
  </Card>,
  dom,
)`,
  example: (
    <Card inline clickable>
      Content
    </Card>
  ),
})
