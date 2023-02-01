import { example } from 'src/app/Component'
import { type MenuOption, Selector } from 'src/ui'

import description from './README.md'

const data: MenuOption[] = [
  { value: '7701889831', label: 'ООО «МОЕ ДЕЛО»' },
  { value: '4028004764', label: 'ООО «Камертон»' },
  { value: '6732213992', label: 'ООО «КАНТ ИНК»' },
]

export default example({
  id: 'labels',
  title: 'labels',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Selector, MenuOption } from '@cantinc/ui'

const data: MenuOption[] = [
  { value: '7701889831', label: 'ООО «МОЕ ДЕЛО»' },
  { value: '4028004764', label: 'ООО «Камертон»' },
  { value: '6732213992', label: 'ООО «КАНТ ИНК»' },
]

innet(
  <Selector exact label='ИНН' values={data} />,
  dom,
)`,
  example: (
    <Selector exact label='ИНН' values={data} />
  ),
})
