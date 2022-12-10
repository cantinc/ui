import { example } from 'src/app/Component'
import { Button, notify } from 'src/ui'

import description from './README.md'

export default example({
  id: 'timeout',
  title: 'timeout',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Button, notify } from '@cantinc/ui'

innet(
  <Button onclick={() => notify('Custom timeout!', 'success', 13)}>
    Click Me
  </Button>,
  dom,
)`,
  example: (
    <Button onclick={() => notify('Custom timeout!', 'success', 13)}>
      Click Me
    </Button>
  ),
})
