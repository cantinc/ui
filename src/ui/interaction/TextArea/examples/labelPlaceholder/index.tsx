import { example } from 'src/app/Component'
import { TextArea } from 'src/ui'

import description from './README.md'

export default example({
  id: 'labelPlaceholder',
  title: 'label & placeholder',
  description,
  example: (
    <TextArea label='Label' placeholder='Placeholder...' />
  ),
})
