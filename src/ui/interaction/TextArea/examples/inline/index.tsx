import { example } from 'src/app/Component'
import { TextArea } from 'src/ui'

import description from './README.md'

export default example({
  id: 'inline',
  title: 'inline',
  description,
  example: (
    <TextArea inline />
  ),
})
