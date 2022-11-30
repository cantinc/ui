import { example } from 'src/app/Component'
import { Input } from 'src/ui'

import description from './README.md'

export default example({
  id: 'label',
  title: 'label',
  description,
  example: (
    <Input label='Test field' />
  ),
})
