import { example } from 'src/app/Component'
import { Selector } from 'src/ui'

import description from './README.md'

export default example({
  id: 'label',
  title: 'label',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Selector } from '@cantinc/ui'

innet(
  <Selector label='Label' />,
  dom,
)`,
  example: (
    <Selector label='Label' />
  ),
})
