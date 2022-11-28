import { meta } from 'src/app/Component'

import { Button } from '../../buttons'
import { Form } from '../Form'
import { FormToggle } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof FormToggle>({
  component: FormToggle,
  name: 'FormToggle',
  description,
  components: {
    [Form.name]: 'Form',
    [Button.name]: 'Button',
  },
  examples,
})
