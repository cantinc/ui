import { example } from 'src/app/Component'
import { InputNumber } from 'src/ui'

import description from './README.md'

export default example({
  id: 'minMax',
  title: 'min & max',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { InputNumber } from '@cantinc/ui'

innet(
  <InputNumber
    min={0}
    max={10}
    step={0.5}
    label='Label'
  />,
  dom,
)`,
  example: (
    <InputNumber
      min={0}
      max={10}
      step={0.5}
      label='Label'
    />
  ),
})
