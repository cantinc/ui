import { example } from 'src/app/Component'
import { Tag } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Tag } from '@cantinc/ui'

innet(
  <Tag label='Text' />,
  dom,
)`,
  example: (
    <Tag label='Text' />
  ),
})
