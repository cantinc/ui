import { example } from 'src/app/Component'
import { TextArea } from 'src/ui'

import description from './README.md'

export default example({
  id: 'label',
  title: 'label',
  description,
  example: (
    <TextArea label='Label' />
  ),
})
