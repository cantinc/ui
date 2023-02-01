import { example } from 'src/app/Component'
import { type MenuOption, SearchSelector } from 'src/ui'

import description from './README.md'

const values: MenuOption[] = [
  { value: '', label: 'None' },
  { value: 'test1', label: 'Test 1' },
  { value: 'test2', label: 'Test 2' },
  { value: 'test3', label: 'Test 3' },
]

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { SearchSelector, MenuOption } from '@cantinc/ui'

const values: MenuOption[] = [
  { value: '', label: 'None' },
  { value: 'test1', label: 'Test 1' },
  { value: 'test2', label: 'Test 2' },
  { value: 'test3', label: 'Test 3' },
]

innet(
  <SearchSelector values={values} exact key='test' />,
  dom,
)`,
  example: (
    <SearchSelector values={values} exact key='test' />
  ),
})
