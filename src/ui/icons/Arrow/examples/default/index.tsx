import { example } from 'src/app/Component'
import { Arrow } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Arrow } from '@cantinc/ui'

innet(
  <Arrow />,
  dom,
)`,
  example: (
    <Arrow />
  ),
})
