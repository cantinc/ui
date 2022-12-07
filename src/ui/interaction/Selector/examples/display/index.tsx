import { example } from 'src/app/Component'
import { Selector, SelectorItemProps } from 'src/ui'

import description from './README.md'

const data: SelectorItemProps[] = [
  { value: '7701889831', label: 'ООО «МОЕ ДЕЛО»' },
  { value: '4028004764', label: 'ООО «Камертон»' },
  { value: '6732213992', label: 'ООО «КАНТ ИНК»' },
]

export default example({
  id: 'display',
  title: 'display',
  description,
  example: (
    <Selector exact display='value' label='Label' values={data} />
  ),
})
