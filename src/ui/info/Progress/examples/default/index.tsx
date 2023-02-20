import { example } from 'src/app/Component'
import { Progress } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Progress } from '@cantinc/ui'

innet(
  <Progress value={0.5} />,
  dom,
)`,
  example: (
    <Progress value={0.5} />
  ),
})
