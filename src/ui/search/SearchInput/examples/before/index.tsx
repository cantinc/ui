import { example } from 'src/app/Component'
import { Icon, SearchInput } from 'src/ui'

import description from './README.md'

export default example({
  id: 'before',
  title: 'before',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { SearchInput, Icon } from '@cantinc/ui'

innet(
  <SearchInput key='test'>
    <slot name='before'>
      <Icon />
    </slot>
  </SearchInput>,
  dom,
)`,
  example: (
    <SearchInput key='test'>
      <slot name='before'>
        <Icon />
      </slot>
    </SearchInput>
  ),
})
