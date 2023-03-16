import { Button, Buttons, Form, type FormContext, FormInput, type FormInputProps, FormSet, Icon, notify } from 'src'
import { example } from 'src/app/Component'

import description from './README.md'

const handleSuccess = (form: FormContext) => {
  notify(JSON.stringify(form.submitData))
}

export default example({
  id: 'values',
  title: 'values',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import {
  Form,
  FormSet,
  Button,
  Buttons,
  FormInput,
  FormInputProps,
  FormContext,
  Icon,
  Notifications,
  notify,
} from '@cantinc/ui'

const handleSuccess = (form: FormContext) => {
  notify(JSON.stringify(form.submitData))
}

innet(
  <Form vertical onsuccess={handleSuccess}>
    <FormSet<FormInputProps>
      defaultValues={[{ defaultValue: 'Address 1' }, { defaultValue: 'Address 2' }]}
      element={FormInput}
      name='address'
      label='Address'>
      <Icon icon='plus' />
      Add an address
    </FormSet>
    <Buttons>
      <Button view='secondary' flex type='reset'>
        Reset
      </Button>
      <Button flex>
        Subscribe
      </Button>
    </Buttons>
    <Notifications />
  </Form>,
  dom,
)`,
  example: (
    <Form vertical onsuccess={handleSuccess}>
      <FormSet<FormInputProps>
        defaultValues={[{ defaultValue: 'Address 1' }, { defaultValue: 'Address 2' }]}
        element={FormInput}
        name='address'
        label='Address'>
        <Icon icon='plus' />
        Add an address
      </FormSet>
      <Buttons>
        <Button view='secondary' flex type='reset'>
          Reset
        </Button>
        <Button flex>
          Subscribe
        </Button>
      </Buttons>
    </Form>
  ),
})
