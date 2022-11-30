import { meta } from 'src/app/Component'

import { Button } from '../../buttons'
import { Form } from '../Form'
import { FormInput } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof FormInput>({
  component: FormInput,
  name: 'FormInput',
  description,
  components: {
    [Form.name]: 'Form',
    [Button.name]: 'Button',
  },
  examples,
})
