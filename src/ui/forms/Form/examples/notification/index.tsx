import { placeholder } from '@cantinc/utils'
import { example } from 'src/app/Component'
import {
  Button, Buttons,
  Form,
  FormInput,
  type FormNotificationHandle,
  formNotificationHandler,
  notify,
} from 'src/ui'

import description from './README.md'

const handleFormNotification: FormNotificationHandle = (form) => {
  if (form.notification) {
    notify(placeholder(form.notification, form.submitData), 'success')
  }
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
  Buttons,
  notify,
  formNotificationHandler,
} from '@cantinc/ui'

const handleFormNotification: FormNotificationHandle = (notification, form) => {
  notify(placeholder(notification, form.submitData), 'success')
}

innet(
  <context for={formNotificationHandler} set={handleFormNotification}>
    <Form notification='Item "{name}" added' action='/items'>
      <FormInput name='name' label='Name' required />
      <Buttons>
        <Button flex>
          Add
        </Button>
      </Buttons>
    </Form>
    <Notifications />
  </context>,
  dom,
)`,
  example: (
    <context for={formNotificationHandler} set={handleFormNotification}>
      <Form notification='Item "{name}" added' action='/items'>
        <FormInput name='name' label='Name' required />
        <Buttons>
          <Button flex>
            Add
          </Button>
        </Buttons>
      </Form>
    </context>
  ),
})
