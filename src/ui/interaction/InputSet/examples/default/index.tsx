import { example } from 'src/app/Component'
import { Icon, InputSet } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { InputSet, Icon } from '@cantinc/ui'

innet(
  <InputSet
    label='Address'
    name='address'>
    <Icon icon='plus' />
    Add an address
  </InputSet>,
  dom,
)`,
  example: (
    <InputSet
      label='Address'
      name='address'>
      <Icon icon='plus' />
      Add an address
    </InputSet>
  ),
})
