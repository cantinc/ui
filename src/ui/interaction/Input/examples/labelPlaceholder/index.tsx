import { example } from 'src/app/Component'
import { Input } from 'src/ui'

import description from './README.md'

export default example({
  id: 'labelPlaceholder',
  title: 'label & placeholder',
  description,
  example: (
    <Input
      label='Test field'
      placeholder='Test...'
      inline
    />
  ),
})
