import { example } from 'src/app/Component'
import { Selector, SelectorItemProps } from 'src/ui'

import description from './README.md'

const data: SelectorItemProps[] = [
  { value: '7701889831', label: 'ООО «МОЕ ДЕЛО»' },
  { value: '4028004764', label: 'ООО «Камертон»' },
  { value: '6732213992', label: 'ООО «КАНТ ИНК»' },
]

export default example({
  id: 'showValues',
  title: 'showValues',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Selector, SelectorItemProps } from '@cantinc/ui'

const data: SelectorItemProps[] = [
  { value: '7701889831', label: 'ООО «МОЕ ДЕЛО»' },
  { value: '4028004764', label: 'ООО «Камертон»' },
  { value: '6732213992', label: 'ООО «КАНТ ИНК»' },
]

innet(
  <Selector showValues label='ИНН' values={data} />,
  dom,
)`,
  example: (
    <Selector showValues label='ИНН' values={data} />
  ),
})
