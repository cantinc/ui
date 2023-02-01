import { example } from 'src/app/Component'
import { Button, Form, FormRadiobox, notify, type RadioItem } from 'src/ui'

import description from './README.md'

const values: RadioItem[] = [
  { value: '1', label: 'Test 1' },
  { value: '2', label: 'Test 2' },
  { value: '3', label: 'Test 3' },
]

export default example({
  id: 'values',
  title: 'values',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import {
  Form,
  FormRadiobox,
  Button,
  notify,
  Notifications,
  RadioItem,
} from '@cantinc/ui'

const values: RadioItem[] = [
  { value: '1', label: 'Test 1' },
  { value: '2', label: 'Test 2' },
  { value: '3', label: 'Test 3' },
]

innet(
  <>
    <Form
      onsuccess={form => notify(
        Array.from(form.fields)[0].state.value,
      )}
      vertical>
      <FormRadiobox
        vertical
        defaultValue='1'
        values={values}
        name='values'
      />
      <Button>
        Test
      </Button>
    </Form>
    <Notifications />
  </>,
  dom,
)`,
  example: (
    <Form
      onsuccess={form => notify(
        Array.from(form.fields)[0].state.value,
      )}
      vertical>
      <FormRadiobox
        vertical
        defaultValue='1'
        values={values}
        name='values'
      />
      <Button>
        Test
      </Button>
    </Form>
  ),
})
