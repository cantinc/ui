import { example } from 'src/app/Component'
import { Button, Form } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `<Form vertical>
  Content
  <Button>
    Submit
  </Button>
</Form>`,
  example: (
    <Form vertical>
      Content
      <Button>
        Submit
      </Button>
    </Form>
  ),
})
