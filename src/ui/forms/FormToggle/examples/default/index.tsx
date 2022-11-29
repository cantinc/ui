import { example } from 'src/app/Component'
import { Button, Form, FormToggle } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  example: (
    <Form notification='Success' vertical>
      <FormToggle name='test' label='TEst' />
      <Button>
        Test
      </Button>
    </Form>
  ),
})
