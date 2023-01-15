import { example } from 'src/app/Component'
import { Button, Form, FormUpload } from 'src/ui'

import description from './README.md'

export default example({
  id: 'accept',
  title: 'accept',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import {
  Form,
  FormUpload,
  Button,
} from '@cantinc/ui'

innet(
  <Form vertical>
    <FormUpload
      accept='.jpg, .jpeg, .png, .webp'
      name='name'
      label='Name'
      required
    />
    <Button>
      Send
    </Button>
  </Form>,
  dom,
)`,
  example: (
    <Form vertical>
      <FormUpload
        accept='.jpg, .jpeg, .png, .webp'
        name='name'
        label='Name'
        required
      />
      <Button>
        Send
      </Button>
    </Form>
  ),
})
