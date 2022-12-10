import { example } from 'src/app/Component'
import { Input } from 'src/ui'

import description from './README.md'

export default example({
  id: 'inline',
  title: 'inline',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Input } from '@cantinc/ui'

innet(
  <Input inline />,
  dom,
)`,
  example: (
    <Input inline />
  ),
})
