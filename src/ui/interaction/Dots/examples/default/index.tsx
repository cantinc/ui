import { example } from 'src/app/Component'
import { Dots } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Dots } from '@cantinc/ui'

innet(
  <Dots count={3} />,
  dom,
)`,
  example: (
    <Dots count={3} padding={16} />
  ),
})
