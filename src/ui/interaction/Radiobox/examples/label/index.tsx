import { example } from 'src/app/Component'
import { Radiobox, type RadioItem } from 'src/ui'

import description from './README.md'

const values: RadioItem[] = [
  { value: 'test1', label: 'Test 1' },
  { value: 'test2', label: 'Test 2' },
  { value: 'test3', label: 'Test 3' },
]

export default example({
  id: 'label',
  title: 'label',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Radiobox, RadioItem } from '@cantinc/ui'

const values: RadioItem[] = [
  { value: 'test1', label: 'Test 1' },
  { value: 'test2', label: 'Test 2' },
  { value: 'test3', label: 'Test 3' },
]

innet(
  <Radiobox
    name='label'
    inline
    wrap
    values={values}
  />,
  dom,
)`,
  example: (
    <Radiobox
      name='label'
      inline
      wrap
      values={values}
    />
  ),
})
