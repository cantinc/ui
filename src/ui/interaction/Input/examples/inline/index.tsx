import { example } from 'src/app/Component'
import { Input } from 'src/ui'

import description from './README.md'

export default example({
  id: 'inline',
  title: 'inline',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Input } from '@cantinc/ui'

innet(
  <>
    <Input />
    <Input label='Inline 1' inline />
    <span style='width:20px;display:inline-block' />
    <Input label='Inline 2' inline />
  </>,
  dom,
)`,
  example: (
    <>
      <Input />
      <Input label='Inline 1' inline />
      <span style='width:20px;display:inline-block' />
      <Input label='Inline 2' inline />
    </>
  ),
})
