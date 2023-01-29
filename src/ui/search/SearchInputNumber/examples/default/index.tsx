import { example } from 'src/app/Component'
import { SearchInputNumber } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { SearchInputNumber } from '@cantinc/ui'

innet(
  <SearchInputNumber key='test' />,
  dom,
)`,
  example: (
    <SearchInputNumber key='test' />
  ),
})
