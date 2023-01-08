import { example } from 'src/app/Component'
import { Icon, SearchInputMask } from 'src/ui'

import description from './README.md'

export default example({
  id: 'before',
  title: 'before',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { SearchInputMask, Icon } from '@cantinc/ui'

innet(
  <SearchInputMask mask='+7 (999) 999-99-99' key='before'>
    <slot name='before'>
      <Icon />
    </slot>
  </SearchInputMask>,
  dom,
)`,
  example: (
    <SearchInputMask mask='+7 (999) 999-99-99' key='before'>
      <slot name='before'>
        <Icon />
      </slot>
    </SearchInputMask>
  ),
})
