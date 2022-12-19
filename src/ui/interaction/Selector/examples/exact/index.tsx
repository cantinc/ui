import { example } from 'src/app/Component'
import { OptionProps, Selector } from 'src/ui'

import description from './README.md'

const data: OptionProps[] = [
  { value: '7701889831' },
  { value: '4028004764' },
  { value: '6732213992' },
]

export default example({
  id: 'exact',
  title: 'exact',
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
  <Selector exact values={data} />,
  dom,
)`,
  example: (
    <Selector exact values={data} />
  ),
})
