import { example } from 'src/app/Component'
import { Toggle } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Toggle } from '@cantinc/ui'

innet(
  <Toggle />,
  dom,
)`,
  example: (
    <Toggle />
  ),
})
