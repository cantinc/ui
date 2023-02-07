import { example } from 'src/app/Component'
import { Button, Form, FormInputNumber, notify } from 'src/ui'

import { type FormContext } from '../../../../../hooks'
import { createFormData } from '../../../../../utils'
import description from './README.md'

const handleSuccess = (form: FormContext) => {
  notify(`Count: ${createFormData(form).get('count')}`)
}

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import {
  Form,
  FormInputNumber,
  Button,
  Notifications,
  notify,
  createFormDate,
} from '@cantinc/ui'

const handleSuccess = (form: FormContext) => {
  notify(\`Count: \${createFormData(form).get('count')}\`)
}

innet(
  <>
    <Form onsuccess={handleSuccess} vertical>
      <FormInputNumber
        name='count'
        label='Count'
      />
      <Button>
        Send
      </Button>
    </Form>
    <Notifications />
  </>,
  dom,
)`,
  example: (
    <Form onsuccess={handleSuccess} vertical>
      <FormInputNumber
        defaultValue={0}
        name='count'
        label='Count'
      />
      <Button>
        Send
      </Button>
    </Form>
  ),
})
