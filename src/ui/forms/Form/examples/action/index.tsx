import { example } from 'src/app/Component'
import { FormContext } from 'src/hooks'
import { Button, Form, formActionHandler, FormInput, FormSelector, notify } from 'src/ui'

import description from './README.md'

const handleFormAction = (action: string, form: FormContext) => {
  const params = Array
    .from(form.fields)
    .reduce((prev, field) =>
      `${prev}\n\n${field.name}: ${field.state.value}`,
    '')

  notify(`action: ${action}${params}`)
}

export default example({
  id: 'action',
  title: 'action',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import {
  Form,
  notify,
  formActionHandler,
  FormContext,
  FormInput,
  FormSelector,
  Button,
} from '@cantinc/ui'

const handleFormAction = (action: string, form: FormContext) => {
  const params = Array
    .from(form.fields)
    .reduce((prev, field) =>
      \`\${prev}\\n\\n\${field.name}: \${field.state.value}\`,
    '')

  notify(\`action: \${action}\${params}\`)
}

innet(
  <context for={formActionHandler} set={handleFormAction}>
    <Form action='/user'>
      <FormInput name='name' label='Name' required />
      <FormSelector
        exact
        name='gender'
        label='Gender'
        required
        values={[
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
        ]}
      />
      <Button>
        Save
      </Button>
    </Form>
  </context>,
  dom,
)`,
  example: (
    <context for={formActionHandler} set={handleFormAction}>
      <Form action='/user'>
        <FormInput name='name' label='Name' required />
        <FormSelector
          exact
          name='gender'
          label='Gender'
          required
          values={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
          ]}
        />
        <Button>
          Save
        </Button>
      </Form>
    </context>
  ),
})
