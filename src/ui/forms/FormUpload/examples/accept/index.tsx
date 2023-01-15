import { example } from 'src/app/Component'
import { Button, Buttons, Form, FormUpload } from 'src/ui'

import description from './README.md'
import test from './test.jpg'

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
  Buttons,
} from '@cantinc/ui'

import test from './test.jpg'

innet(
  <Form onsuccess={form => console.log(form)} vertical>
    <FormUpload
      accept='.jpg, .jpeg, .png, .webp'
      name='name'
      label='Name'
      required
      multiple
      defaultValue={[
        { src: test, name: 'test.jpg' },
        { src: 'JPEG', name: 'test.jpg' },
      ]}
    />
    <Buttons>
      <Button
        flex
        view='secondary'
        type='reset'>
        Reset
      </Button>
      <Button
        flex>
        Send
      </Button>
    </Buttons>
  </Form>,
  dom,
)`,
  example: (
    <Form onsuccess={form => console.log(form)} vertical>
      <FormUpload
        accept='.jpg, .jpeg, .png, .webp'
        name='name'
        label='Name'
        required
        multiple
        defaultValue={[
          { src: test, name: 'test.jpg' },
          { src: 'JPEG', name: 'test.jpg' },
        ]}
      />
      <Buttons>
        <Button
          flex
          view='secondary'
          type='reset'>
          Reset
        </Button>
        <Button
          flex>
          Send
        </Button>
      </Buttons>
    </Form>
  ),
})
