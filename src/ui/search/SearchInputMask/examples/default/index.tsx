import { example } from 'src/app/Component'
import { SearchInputMask } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { SearchInputMask } from '@cantinc/ui'

innet(
  <SearchInputMask key='test' />,
  dom,
)`,
  example: (
    <SearchInputMask mask='+7 (999) 999-99-99' key='test' />
  ),
})
