import { example } from 'src/app/Component'
import { type FormContext } from 'src/hooks'
import { Button, Form, FormHidden, notify } from 'src/ui'
import { createFormData } from 'src/utils'

import description from './README.md'

const handleSuccess = (form: FormContext) => {
  notify(`User: ${createFormData(form).get('user')}`)
}

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import {
  Form,
  FormHidden,
  Button,
  Notifications,
  notify,
  createFormDate,
} from '@cantinc/ui'

const handleSuccess = (form: FormContext) => {
  notify(\`User: \${createFormDate(form, 'POST').get('user')}\`)
}

innet(
  <>
    <Form onsuccess={handleSuccess} vertical>
      <FormHidden name='user' value='1' />
      <Button view='negative'>
        Delete
      </Button>
    </Form>
    <Notifications />
  </>,
  dom,
)`,
  example: (
    <Form onsuccess={handleSuccess} vertical>
      <FormHidden name='user' value='1' />
      <Button view='negative'>
        Delete
      </Button>
    </Form>
  ),
})
