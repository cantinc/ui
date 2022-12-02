import { meta } from 'src/app/Component'

import { TextArea } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof TextArea>({
  component: TextArea,
  name: 'TextArea',
  description,
  examples,
})
