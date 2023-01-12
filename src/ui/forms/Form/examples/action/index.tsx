import { example } from 'src/app/Component'
import { Button, Form, FormActionHandle, formActionHandler, FormInput, FormSelector, notify } from 'src/ui'

import description from './README.md'

const handleFormAction: FormActionHandle = (action, form) => {
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
  FormInput,
  FormSelector,
  Button,
  notify,
  formActionHandler,
  FormActionHandle,
} from '@cantinc/ui'

const handleFormAction: FormActionHandle = (action, form) => {
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
