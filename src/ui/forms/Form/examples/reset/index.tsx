import { example } from 'src/app/Component'
import { Button, Buttons, Form, FormInput } from 'src/ui'

import description from './README.md'

export default example({
  id: 'reset',
  title: 'reset',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Form, FormInput, Button, Buttons } from '@cantinc/ui'

innet(
  <Form>
    <FormInput
      name='name'
      required
      defaultValue='Mike'
      label='Name'
    />
    <FormInput
      name='surname'
      required
      defaultValue='Deight'
      label='Surname'
    />
    <Buttons>
      <Button flex view='secondary' type='reset'>
        Reset
      </Button>
      <Button flex>
        Log-in
      </Button>
    </Buttons>
  </Form>,
  dom,
)`,
  example: (
    <Form>
      <FormInput
        name='name'
        required
        defaultValue='Mike'
        label='Name'
      />
      <FormInput
        name='surname'
        required
        defaultValue='Deight'
        label='Surname'
      />
      <Buttons>
        <Button flex view='secondary' type='reset'>
          Reset
        </Button>
        <Button flex>
          Log-in
        </Button>
      </Buttons>
    </Form>
  ),
})
