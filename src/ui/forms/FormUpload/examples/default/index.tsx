import { example } from 'src/app/Component'
import { Button, Buttons, Form, FormUpload } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import {
  Form,
  FormUpload,
  Button,
  Buttons,
} from '@cantinc/ui'

innet(
  <Form onsuccess={form => console.log(form)} vertical>
    <FormUpload name='name' label='Name' required />
    <Buttons>
      <Button flex view='secondary' type='reset'>
        Reset
      </Button>
      <Button flex>
        Send
      </Button>
    </Buttons>
  </Form>,
  dom,
)`,
  example: (
    <Form onsuccess={form => console.log(form)} vertical>
      <FormUpload name='name' label='Name' required />
      <Buttons>
        <Button flex view='secondary' type='reset'>
          Reset
        </Button>
        <Button flex>
          Send
        </Button>
      </Buttons>
    </Form>
  ),
})
