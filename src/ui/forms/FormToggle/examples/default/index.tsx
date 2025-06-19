import { example } from 'src/app/Component'
import { Button, Buttons, Form, FormToggle, notify } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import {
  Form,
  FormToggle,
  Button,
  Buttons,
  Notifications,
} from '@cantinc/ui'

innet(
  <>
    <Form
      onsuccess={form => notify(
        String(Array.from(form.fields)[0].state.value),
      )}
      vertical>
      <FormToggle name='test' />
      <Buttons>
        <Button>
          Test
        </Button>
      </Buttons>
    </Form>
    <Notifications />
  </>,
  dom,
)`,
  example: (
    <Form
      onsuccess={form => notify(
        String(Array.from(form.fields)[0].state.value),
      )}
      vertical>
      <FormToggle name='test' />
      <Buttons>
        <Button>
          Test
        </Button>
      </Buttons>
    </Form>
  ),
})
