import { meta } from 'src/app/Component'

import { Button } from '../../buttons'
import { Flex } from '../../layout'
import { Form } from '../Form'
import { FormTextArea } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof FormTextArea>({
  component: FormTextArea,
  name: 'FormTextArea',
  description,
  components: {
    [Form.name]: 'Form',
    [Button.name]: 'Button',
    [Flex.name]: 'Flex',
  },
  examples,
})
