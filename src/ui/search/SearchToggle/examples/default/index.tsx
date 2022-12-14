import { example } from 'src/app/Component'
import { SearchToggle } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { SearchToggle } from '@cantinc/ui'

innet(
  <SearchToggle key='test' />,
  dom,
)`,
  example: (
    <SearchToggle key='test' />
  ),
})
