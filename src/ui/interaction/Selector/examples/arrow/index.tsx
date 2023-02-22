import { example } from 'src/app/Component'
import { type MenuOption, Selector } from 'src/ui'

import description from './README.md'

const data: MenuOption[] = [
  { value: 'test1' },
  { value: 'test2' },
  { value: 'test3' },
  { value: 'test4' },
  { value: 'test5' },
  { value: 'test6' },
  { value: 'test7' },
  { value: 'test8' },
  { value: 'test9' },
  { value: 'test10' },
]

export default example({
  id: 'arrow',
  title: 'arrow',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Selector, MenuOption } from '@cantinc/ui'

const data: MenuOption[] = [
  { value: 'test1' },
  { value: 'test2' },
  { value: 'test3' },
  { value: 'test4' },
  { value: 'test5' },
  { value: 'test6' },
  { value: 'test7' },
  { value: 'test8' },
  { value: 'test9' },
  { value: 'test10' },
]

innet(
  <Selector arrow values={data} />,
  dom,
)`,
  example: (
    <Selector arrow values={data} />
  ),
})
