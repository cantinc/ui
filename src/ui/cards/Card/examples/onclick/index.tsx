import { example } from 'src/app/Component'
import { Card, notify } from 'src/ui'

import description from './README.md'

export default example({
  id: 'onclick',
  title: 'onclick',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Card, notify } from '@cantinc/ui'

innet(
  <Card inline onclick={() => notify('clicked')}>
    Click me
  </Card>,
  dom,
)`,
  example: (
    <Card inline onclick={() => notify('clicked')}>
      Click me
    </Card>
  ),
})
