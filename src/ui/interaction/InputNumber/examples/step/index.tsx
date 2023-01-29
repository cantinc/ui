import { example } from 'src/app/Component'
import { InputNumber } from 'src/ui'

import description from './README.md'

export default example({
  id: 'step',
  title: 'step',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { InputNumber } from '@cantinc/ui'

innet(
  <InputNumber step={0.1} />,
  dom,
)`,
  example: (
    <InputNumber step={0.1} />
  ),
})
