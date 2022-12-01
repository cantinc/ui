import { example } from 'src/app/Component'
import { Input } from 'src/ui'

import description from './README.md'

export default example({
  id: 'placeholder',
  title: 'placeholder',
  description,
  example: (
    <Input
      inline
      placeholder='Placeholder'
    />
  ),
})
