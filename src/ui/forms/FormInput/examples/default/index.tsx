import { example } from 'src/app/Component'
import { Button, Form, FormInput } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  example: (
    <Form notification='Success' vertical>
      <FormInput required name='test' />
      <Button>
        Test
      </Button>
    </Form>
  ),
})
