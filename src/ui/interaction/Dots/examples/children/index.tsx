import { example } from 'src/app/Component'
import { Dots } from 'src/ui'

import description from './README.md'

export default example({
  id: 'children',
  title: 'children',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Dots } from '@cantinc/ui'

innet(
  <Dots inline size={38} progress count={5}>
    {(i: number) => i}
  </Dots>,
  dom,
)`,
  example: (
    <Dots inline size={38} count={5}>
      {(i: number) => i}
    </Dots>
  ),
})
