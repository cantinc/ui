import { example } from 'src/app/Component'
import { Radiobox } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Radiobox } from '@cantinc/ui'

innet(
  <Radiobox />,
  dom,
)`,
  example: (
    <Radiobox />
  ),
})
