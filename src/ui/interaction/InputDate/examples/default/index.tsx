import { example } from 'src/app/Component'
import { InputDate } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { InputDate } from '@cantinc/ui'

innet(
  <InputDate label='Your Birthday' />,
  dom,
)`,
  example: (
    <InputDate label='Your Birthday' />
  ),
})
