import { example } from 'src/app/Component'
import { Button, Form } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  components: {
    [Button.name]: 'Button',
  },
  example: (
    <Form vertical>
      Content
      <Button>
        Submit
      </Button>
    </Form>
  ),
})
