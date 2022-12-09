import { example } from 'src/app/Component'
import { Button, Form, FormTextArea } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  example: (
    <Form vertical>
      <FormTextArea name='email' label='Email' />
      <Button>
        Subscribe
      </Button>
    </Form>
  ),
})
