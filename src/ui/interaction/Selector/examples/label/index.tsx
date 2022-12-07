import { example } from 'src/app/Component'
import { Selector } from 'src/ui'

import description from './README.md'

export default example({
  id: 'label',
  title: 'label',
  description,
  example: (
    <Selector label='Label' />
  ),
})
