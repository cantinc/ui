import { example } from 'src/app/Component'
import { Button, Form, FormInputMask, notify } from 'src/ui'

import { type FormContext } from '../../../../../hooks'
import { createFormData } from '../../../../../utils'
import description from './README.md'

const handleSuccess = (form: FormContext) => {
  notify(`Phone: ${createFormData(form).get('phone')}`)
}

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import {
  Form,
  FormInputMask,
  Button,
  Notifications,
  notify,
  createFormDate,
} from '@cantinc/ui'

const handleSuccess = (form: FormContext) => {
  notify(\`Phone: \${createFormDate(form).get('phone')}\`)
}

innet(
  <>
    <Form onsuccess={handleSuccess} vertical>
      <FormInputMask
        mask='+7 (999) 999-99-99'
        name='phone'
        label='Phone'
        required
        clearable
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
      <FormInputMask
        mask='+7 (999) 999-99-99'
        name='phone'
        label='Phone'
        required
        clearable
      />
      <Button>
        Send
      </Button>
    </Form>
  ),
})
