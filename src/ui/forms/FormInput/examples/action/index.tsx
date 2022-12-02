import { example } from 'src/app/Component'
import { FormContext } from 'src/hooks'
import { Button, Form, formActionHandler, FormInput, notify } from 'src/ui'

import description from './README.md'

export default example({
  id: 'action',
  title: 'action',
  description,
  example: (
    <context for={formActionHandler} set={(action: string, form: FormContext) => notify(`${action}/${Array.from(form.fields)[0].state.value}`)}>
      <Form action='/test' vertical>
        <FormInput name='name' label='Name' required />
        <Button>
          Send
        </Button>
      </Form>
    </context>
  ),
})
