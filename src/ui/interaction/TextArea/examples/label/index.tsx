import { example } from 'src/app/Component'
import { TextArea } from 'src/ui'

import description from './README.md'

export default example({
  id: 'label',
  title: 'label',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { TextArea } from '@cantinc/ui'

innet(
  <TextArea label='Label' />,
  dom,
)`,
  example: (
    <TextArea label='Label' />
  ),
})
