import { example } from 'src/app/Component'
import { Icon, type OptionProps, Selector } from 'src/ui'

import description from './README.md'

const data: OptionProps[] = [
  { value: '7701889831' },
  { value: '4028004764' },
  { value: '6732213992' },
]

export default example({
  id: 'after',
  title: 'after',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Selector, SelectorItemProps, Icon } from '@cantinc/ui'

const data: SelectorItemProps[] = [
  { value: '7701889831' },
  { value: '4028004764' },
  { value: '6732213992' },
]

innet(
  <Selector values={data} after={<Icon />} />,
  dom,
)`,
  example: (
    <Selector values={data} after={<Icon />} />
  ),
})
