import { example } from 'src/app/Component'
import { Button, Form, FormTextArea } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  example: (
    <Form notification='Success' vertical>
      <FormTextArea name='name' label='Name' required />
      <Button>
        Send
      </Button>
    </Form>
  ),
})
