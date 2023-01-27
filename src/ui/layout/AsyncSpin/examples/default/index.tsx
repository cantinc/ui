import { example } from 'src/app/Component'
import { AsyncSpin } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  example: (
    <AsyncSpin />
  ),
})
