import { example } from 'src/app/Component'
import { SpinBox } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { SpinBox } from '@cantinc/ui'

innet(
  <SpinBox loading />,
  dom,
)`,
  example: (
    <SpinBox loading />
  ),
})
