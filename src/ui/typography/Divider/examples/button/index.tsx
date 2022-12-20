import { example } from 'src/app/Component'
import { Button, Divider } from 'src/ui'

import description from './README.md'

export default example({
  id: 'button',
  title: 'Button',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Divider, Button } from '@cantinc/ui'

innet(
  <Divider>
    <Button>
      Content
    </Button>
  </Divider>,
  dom,
)`,
  example: (
    <Divider>
      <Button>
        Content
      </Button>
    </Divider>
  ),
})
