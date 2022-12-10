import { example } from 'src/app/Component'
import { Button, notify } from 'src/ui'

import description from './README.md'

export default example({
  id: 'click',
  title: 'Clickable',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Button, notify } from '@cantinc/ui'

innet(
  <Button
    onclick={() => notify('clicked')}>
    Click Me
  </Button>,
  dom,
)`,
  example: (
    <Button
      onclick={() => notify('clicked')}>
      Click Me
    </Button>
  ),
})
