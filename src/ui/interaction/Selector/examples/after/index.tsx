import { example } from 'src/app/Component'
import { Icon, OptionProps, Selector } from 'src/ui'

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

import { Selector, SelectorItemProps } from '@cantinc/ui'

const data: SelectorItemProps[] = [
  { value: '7701889831' },
  { value: '4028004764' },
  { value: '6732213992' },
]

innet(
  <Selector values={data}>
    <slot name='after'>
      <Icon icon='loupe' />
    </slot>
  </Selector>,
  dom,
)`,
  example: (
    <Selector values={data}>
      <slot name='after'>
        <Icon icon='loupe' />
      </slot>
    </Selector>
  ),
})
