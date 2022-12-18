import { example } from 'src/app/Component'
import { Button } from 'src/ui'

import description from './README.md'

export default example({
  id: 'padding',
  title: 'padding',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Button } from '@cantinc/ui'

innet(
  <Button padding={[16, 24]}>
    Click Me
  </Button>,
  dom,
)`,
  example: (
    <Button padding={[16, 24]}>Click Me</Button>
  ),
})
