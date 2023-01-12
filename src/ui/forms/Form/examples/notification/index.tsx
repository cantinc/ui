import { placeholder } from '@cantinc/utils'
import { example } from 'src/app/Component'
import {
  Button,
  Form,
  FormInput,
  FormNotificationHandle,
  formNotificationHandler,
  notify,
} from 'src/ui'
import { parseForm } from 'src/utils'

import description from './README.md'

const handleFormNotification: FormNotificationHandle = (notification, form) => {
  notify(placeholder(notification, parseForm(form)), 'success')
}

export default example({
  id: 'formNotificationHandler',
  title: 'formNotificationHandler',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'
import { placeholder } from '@cantinc/utils'

import {
  Form,
  FormInput,
  Notifications,
  Button,
  notify,
  parseForm,
  formNotificationHandler,
} from '@cantinc/ui'

const handleFormNotification: FormNotificationHandle = (notification, form) => {
  notify(placeholder(notification, parseForm(form)), 'success')
}

innet(
  <context for={formNotificationHandler} set={handleFormNotification}>
    <Form notification='Item "{name}" added' action='/items'>
      <FormInput name='name' label='Name' required />
      <Button>
        Add
      </Button>
    </Form>
    <Notifications />
  </context>,
  dom,
)`,
  example: (
    <context for={formNotificationHandler} set={handleFormNotification}>
      <Form notification='Item "{name}" added' action='/items'>
        <FormInput name='name' label='Name' required />
        <Button>
          Add
        </Button>
      </Form>
    </context>
  ),
})
