import { example } from 'src/app/Component'
import { Selector, SelectorValue } from 'src/ui'

import description from './README.md'

const data: SelectorValue[] = [
  { value: '7701889831', label: 'ООО «МОЕ ДЕЛО»' },
  { value: '4028004764', label: 'ООО «Камертон»' },
]

export default example({
  id: 'default',
  title: 'Default',
  description,
  example: (
    <Selector label='ИНН' values={data} />
  ),
})
