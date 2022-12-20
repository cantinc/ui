import { example } from 'src/app/Component'
import { Divider } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Divider } from '@cantinc/ui'

innet(
  <Divider />,
  dom,
)`,
  example: (
    <Divider />
  ),
})
