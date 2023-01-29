import { example } from 'src/app/Component'
import { InputNumber } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { InputNumber } from '@cantinc/ui'

innet(
  <InputNumber />,
  dom,
)`,
  example: (
    <InputNumber />
  ),
})
