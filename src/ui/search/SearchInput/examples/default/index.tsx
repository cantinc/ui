import { example } from 'src/app/Component'
import { SearchInput } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { SearchInput } from '@cantinc/ui'

innet(
  <SearchInput key='test' />,
  dom,
)`,
  example: (
    <SearchInput key='test' />
  ),
})
