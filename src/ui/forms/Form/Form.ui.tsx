import { meta } from 'src/app/Component'

import { Form } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof Form>({
  component: Form,
  name: 'Form',
  description,
  examples,
})
