import { example } from 'src/app/Component'
import { Button, Form, FormInput } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Form, FormInput, Button } from '@cantinc/ui'

innet(
  <Form>
    <FormInput name='name' required label='Name' />
    <FormInput name='password' required label='Password' />
    <Button>
      Log-in
    </Button>
  </Form>,
  dom,
)`,
  example: (
    <Form>
      <FormInput name='name' required label='Name' />
      <FormInput name='password' required label='Password' />
      <Button>
        Log-in
      </Button>
    </Form>
  ),
})
