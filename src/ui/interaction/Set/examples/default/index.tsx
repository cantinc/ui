import { example } from 'src/app/Component'
import { Icon, Input, InputProps, Set } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Set, Input, InputProps, Icon } from '@cantinc/ui'

innet(
  <Set<InputProps>
    element={Input}
    label='Address'
    name='address'>
    <Icon icon='plus' />
    Add an address
  </Set>,
  dom,
)`,
  example: (
    <Set<InputProps>
      element={Input}
      label='Address'
      name='address'>
      <Icon icon='plus' />
      Add an address
    </Set>
  ),
})
