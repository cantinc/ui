import { use } from '@innet/dom'
import { example } from 'src/app/Component'
import { Button, Form, FormInput, type FormInputProps, Icon, Set } from 'src/ui'

import description from './README.md'

export default example({
  id: 'form',
  title: 'form',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import {
  Set,
  Form,
  FormInput,
  FormInputProps,
  Icon,
  Button,
} from '@cantinc/ui'

innet(
  <Form onsuccess={form => console.log(form.submitData)}>
    <Set<FormInputProps>
      element={FormInput}
      label='Address'
      required
      name='address'>
      <Icon icon='plus' />
      Add an address
    </Set>
    <Button>
      Send
    </Button>
  </Form>,
  dom,
)`,
  example: (
    <Form onsuccess={form => console.log(form.submitData)}>
      <Set<FormInputProps>
        element={FormInput}
        handleItemProps={(item, index) => ({ ...use(item), label: () => `${use(item).label} ${use(index) + 1}` })}
        label='Address'
        required
        name='address'>
        <Icon icon='plus' />
        Add an address
      </Set>
      <Button>
        Send
      </Button>
    </Form>
  ),
})
