import { example } from 'src/app/Component'
import { ToggleBar } from 'src/ui'

import description from './README.md'

export default example({
  id: 'loading',
  title: 'loading',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { ToggleBar } from '@cantinc/ui'

innet(
  <ToggleBar loading values={[]} />,
  dom,
)`,
  example: (
    <ToggleBar loading values={[]} />
  ),
})
