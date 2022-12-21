import { example } from 'src/app/Component'
import { Icon } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Icon } from '@cantinc/ui'

innet(
  <Icon icon='cross' />,
  dom,
)`,
  example: (
    <Icon icon='cross' />
  ),
})
