import { example } from 'src/app/Component'
import { Button, Form, FormInputDate } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import {
  Form,
  FormInputDate,
  Button,
} from '@cantinc/ui'

innet(
  <Form
    onsuccess={form => console.log(form.submitData)}
    vertical>
    <FormInputDate
      name='birthday'
      label='Birthday'
      required
    />
    <Button>
      Send
    </Button>
  </Form>,
  dom,
)`,
  example: (
    <Form
      onsuccess={form => console.log(form.submitData)}
      vertical>
      <FormInputDate
        name='birthday'
        label='Birthday'
        required
      />
      <Button>
        Send
      </Button>
    </Form>
  ),
})
