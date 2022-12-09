import { example } from 'src/app/Component'
import { Button, Divider } from 'src/ui'

import description from './README.md'

export default example({
  id: 'button',
  title: 'Button',
  description,
  code: `<Divider>
  <Button>
    Content
  </Button>
</Divider>`,
  example: (
    <Divider>
      <Button>
        Content
      </Button>
    </Divider>
  ),
})
