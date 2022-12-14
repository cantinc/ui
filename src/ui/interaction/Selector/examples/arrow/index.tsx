import { example } from 'src/app/Component'
import { MenuOption, Selector } from 'src/ui'

import description from './README.md'

const data: MenuOption[] = [
  { value: '7701889831' },
  { value: '4028004764' },
  { value: '6732213992' },
]

export default example({
  id: 'arrow',
  title: 'arrow',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Selector, MenuOption } from '@cantinc/ui'

const data: MenuOption[] = [
  { value: '7701889831' },
  { value: '4028004764' },
  { value: '6732213992' },
]

innet(
  <Selector arrow values={data} />,
  dom,
)`,
  example: (
    <Selector arrow values={data} />
  ),
})
