import { meta } from 'src/app/Component'

import { Input } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof Input>({
  component: Input,
  name: 'Input',
  description,
  examples,
})
