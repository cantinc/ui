import { example } from 'src/app/Component'
import { Button, Buttons, Form, FormInput, notify } from 'src/ui'

import { type FormContext } from '../../../../../hooks'
import description from './README.md'

const handleSuccess = (form: FormContext) => {
  const params = Array
    .from(form.fields)
    .reduce((prev, field) =>
        `${prev}\n\n${field.name}: ${field.state.value}`,
    '')

  notify(params)
}

export default example({
  id: 'onsuccess',
  title: 'onsuccess',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import {
  Form,
  FormInput,
  Button,
  Buttons,
  notify,
  Notifications,
} from '@cantinc/ui'

const handleSuccess = (form: FormContext) => {
  const params = Array
    .from(form.fields)
    .reduce((prev, field) =>
        \`\${prev}\\n\\n\${field.name}: \${field.state.value}\`,
    '')

  notify(params)
}

innet(
  <>
    <Form onsuccess={handleSuccess}>
      <FormInput
        name='name'
        required
        label='Name'
      />
      <FormInput
        name='password'
        type='password'
        required
        label='Password'
      />
      <Buttons>
        <Button flex>
          Log-in
        </Button>
      </Buttons>
    </Form>
    <Notifications />
  </>,
  dom,
)`,
  example: (
    <Form onsuccess={handleSuccess}>
      <FormInput
        name='name'
        required
        label='Name'
      />
      <FormInput
        name='password'
        type='password'
        required
        label='Password'
      />
      <Buttons>
        <Button flex>
          Log-in
        </Button>
      </Buttons>
    </Form>
  ),
})
