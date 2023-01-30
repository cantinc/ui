import { example } from 'src/app/Component'
import { Card } from 'src/ui'

import description from './README.md'

export default example({
  id: 'radius',
  title: 'radius',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Card } from '@cantinc/ui'

innet(
  <Card inline radius='50%'>
    Content
  </Card>,
  dom,
)`,
  example: (
    <Card inline radius='50%'>
      Content
    </Card>
  ),
})
