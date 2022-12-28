import { example } from 'src/app/Component'
import { Button } from 'src/ui'

import description from './README.md'

export default example({
  id: 'element',
  title: 'element',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Button } from '@cantinc/ui'

innet(
  <Button<HTMLAnchorElement>
    element='a'
    href='/'>
    Go to home page
  </Button>,
  dom,
)`,
  example: (
    <Button<HTMLAnchorElement>
      element='a'
      href='/'>
      Go to home page
    </Button>
  ),
})
