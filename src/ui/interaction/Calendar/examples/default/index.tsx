import { example } from 'src/app/Component'
import { Calendar } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Calendar } from '@cantinc/ui'

innet(
  <Calendar />,
  dom,
)`,
  example: (
    <Calendar />
  ),
})
