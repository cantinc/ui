import { example } from 'src/app/Component'
import { type MenuOption, Selector } from 'src/ui'

import description from './README.md'

const data: MenuOption[] = [
  {
    value: 'test1',
    label: 'Test 1',
    hint: 'test1 hint',
  },
  {
    value: 'test2',
    label: 'Test 2',
    hint: 'test2 hint',
  },
  {
    value: 'test3',
    label: 'Test 3',
    hint: 'test3 hint',
  },
]

export default example({
  id: 'optionHint',
  title: 'Option hint',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Selector, MenuOption } from '@cantinc/ui'

const data: MenuOption[] = [
  {
    value: 'test1',
    label: 'Test 1',
    hint: 'test1 hint',
  },
  {
    value: 'test2',
    label: 'Test 2',
    hint: 'test2 hint',
  },
  {
    value: 'test3',
    label: 'Test 3',
    hint: 'test3 hint',
  },
]

innet(
  <Selector label='Test' values={data} />,
  dom,
)`,
  example: (
    <Selector label='Test' values={data} />
  ),
})
