import { example } from 'src/app/Component'
import { Button, notify } from 'src/ui'

import description from './README.md'

export default example({
  id: 'error',
  title: 'error',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Notifications, Button, notify } from '@cantinc/ui'

innet(
  <>
    <Notifications/>
    <Button onclick={() => notify('Error message!', 'error')}>
      Click Me
    </Button>
  </>,
  dom,
)`,
  example: (
    <Button onclick={() => notify('Error message!', 'error')}>
      Click Me
    </Button>
  ),
})
