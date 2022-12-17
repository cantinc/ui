import { example } from 'src/app/Component'
import { Checkbox } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Checkbox } from '@cantinc/ui'

innet(
  <Checkbox />,
  dom,
)`,
  example: (
    <Checkbox />
  ),
})
