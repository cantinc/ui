import { example } from 'src/app/Component'
import { Button } from 'src/ui'

import description from './README.md'

export default example({
  id: 'width',
  title: 'width',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Button } from '@cantinc/ui'

innet(
  <Button width={250}>
    Click Me
  </Button>,
  dom,
)`,
  example: (
    <Button width={250}>
      Click Me
    </Button>
  ),
})
