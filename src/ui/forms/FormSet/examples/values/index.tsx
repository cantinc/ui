import { example } from 'src/app/Component'
import { Button, Buttons, Form, FormInput, type FormInputProps, FormSet, Icon } from 'src/ui'

import description from './README.md'

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
} from '@cantinc/ui'

innet(
  <Form vertical>
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
  </Form>,
  dom,
)`,
  example: (
    <Form vertical>
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
