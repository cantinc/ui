import { example } from 'src/app/Component'
import { TextArea } from 'src/ui'

import description from './README.md'

export default example({
  id: 'placeholder',
  title: 'placeholder',
  description,
  example: (
    <TextArea placeholder='Placeholder' />
  ),
})
