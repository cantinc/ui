import { example } from 'src/app/Component'
import { Button } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Button } from '@cantinc/ui'

innet(
  <Button>Click Me</Button>,
  dom,
)`,
  example: (
    <Button>Click Me</Button>
  ),
})
