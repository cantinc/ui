import { example } from 'src/app/Component'
import { Radiobox, type RadioItem } from 'src/ui'

import description from './README.md'

const values: RadioItem[] = [
  { value: 'test1', label: 'Test1', disabled: true },
  { value: 'test2', label: 'Test2', disabled: true },
]

export default example({
  id: 'disabled',
  title: 'disabled',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Radiobox, RadioItem } from '@cantinc/ui'

const values: RadioItem[] = [
  { value: 'test1', label: 'Test1', disabled: true },
  { value: 'test2', label: 'Test2', disabled: true },
]

innet(
  <Radiobox inline wrap values={values} value='test2' />,
  dom,
)`,
  example: (
    <Radiobox inline wrap values={values} value='test2' />
  ),
})
