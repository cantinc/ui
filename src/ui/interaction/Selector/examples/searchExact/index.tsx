import { example } from 'src/app/Component'
import { type MenuOption, Selector } from 'src/ui'

import description from './README.md'

const data: MenuOption[] = [
  { value: '7701889831' },
  { value: '4028004764' },
  { value: '6732213992' },
]

export default example({
  id: 'searchExact',
  title: 'search & exact',
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
  <Selector exact search values={data} />,
  dom,
)`,
  example: (
    <Selector exact search values={data} />
  ),
})
