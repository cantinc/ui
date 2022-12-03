import { example } from 'src/app/Component'
import { Input } from 'src/ui'

import description from './README.md'

export default example({
  id: 'clearable',
  title: 'clearable',
  description,
  example: (
    <Input clearable />
  ),
})
