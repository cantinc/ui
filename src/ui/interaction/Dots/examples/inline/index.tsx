import { example } from 'src/app/Component'
import { Dots } from 'src/ui'

import description from './README.md'

export default example({
  id: 'inline',
  title: 'inline',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Dots } from '@cantinc/ui'

innet(
  <Dots count={5} inline />,
  dom,
)`,
  example: (
    <Dots count={5} inline />
  ),
})
