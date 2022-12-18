import { example } from 'src/app/Component'
import { Button } from 'src/ui'

import description from './README.md'

export default example({
  id: 'link',
  title: 'link',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Button } from '@cantinc/ui'

innet(
  <Button link href='/'>
    Go to home page
  </Button>,
  dom,
)`,
  example: (
    <Button link href='/'>
      Go to home page
    </Button>
  ),
})
