import { example } from 'src/app/Component'
import { Button, notify } from 'src/ui'

import description from './README.md'

export default example({
  id: 'success',
  title: 'success',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Button, notify } from '@cantinc/ui'

innet(
  <Button onclick={() => notify('Success message!', 'success')}>
    Click Me
  </Button>,
  dom,
)`,
  example: (
    <Button onclick={() => notify('Success message!', 'success')}>
      Click Me
    </Button>
  ),
})
