import { ValidationError, ValidationErrors } from '@cantinc/utils'
import { example } from 'src/app/Component'
import { Button, Buttons, Form, FormInput, FormInputProps, FormSet, Icon, notify } from 'src/ui'

import description from './README.md'

const handleInvalid = (error: ValidationError<any>) => {
  if (error.error === ValidationErrors.required) {
    notify(`The field of ${error.data.key} is required.`)
  }
}

export default example({
  id: 'required',
  title: 'required',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'
import { ValidationError, ValidationErrors } from '@cantinc/utils'

import {
  Form,
  FormSet,
  Button,
  Buttons,
  FormInput,
  FormInputProps,
  Notifications,
  Icon,
} from '@cantinc/ui'

const handleInvalid = (error: ValidationError<any>) => {
  if (error.error === ValidationErrors.required) {
    notify(\`The field of \${error.data.key} is required.\`)
  }
}

innet(
  <>
    <Form oninvalid={handleInvalid} vertical>
      <FormSet<FormInputProps>
        required
        requiredSet
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
    <Notifications />
  </>,
  dom,
)`,
  example: (
    <Form oninvalid={handleInvalid} vertical>
      <FormSet<FormInputProps>
        required
        requiredSet
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
