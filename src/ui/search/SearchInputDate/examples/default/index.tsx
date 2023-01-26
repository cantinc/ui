import { example } from 'src/app/Component'
import { SearchInputDate } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { SearchInputDate } from '@cantinc/ui'

innet(
  <SearchInputDate key='test' />,
  dom,
)`,
  example: (
    <SearchInputDate key='test' />
  ),
})
