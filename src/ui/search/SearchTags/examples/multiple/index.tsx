import { example } from 'src/app/Component'
import { type ITags, SearchTags } from 'src/ui'

import description from './README.md'

const values: ITags = [
  { value: '', label: 'All' },
  { value: 'test1', label: 'Test 1' },
  { value: 'test2', label: 'Test 2' },
  { value: 'test3', label: 'Test 3' },
]

export default example({
  id: 'multiple',
  title: 'multiple',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { ITags, SearchTags } from '@cantinc/ui'

const values: ITags = [
  { value: 'test1', label: 'Test 1' },
  { value: 'test2', label: 'Test 2' },
  { value: 'test3', label: 'Test 3' },
]

innet(
  <SearchTags multiple values={values} key='multiple' />,
  dom,
)`,
  example: (
    <SearchTags multiple values={values} key='multiple' />
  ),
})
