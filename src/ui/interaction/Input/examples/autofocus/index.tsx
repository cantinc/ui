import { example } from 'src/app/Component'
import { Input } from 'src/ui'

import description from './README.md'

export default example({
  id: 'autofocus',
  title: 'autofocus',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Input } from '@cantinc/ui'

innet(
  <Input autofocus />,
  dom,
)`,
  example: (
    <Input autofocus />
  ),
})
