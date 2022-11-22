import { example } from 'src/app/Component'
import { Spin } from 'src/ui'

import description from './README.md'

export default example({
  id: 'gap',
  title: 'Gap',
  description,
  example: (
    <Spin gap={32} />
  ),
})
