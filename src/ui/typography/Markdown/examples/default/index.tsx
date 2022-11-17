import { example } from 'src/app/Component'
import { Markdown } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  example: (
    <Markdown text='### Markdown header' />
  ),
})
