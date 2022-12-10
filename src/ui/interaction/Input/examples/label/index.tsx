import { example } from 'src/app/Component'
import { Input } from 'src/ui'

import description from './README.md'

export default example({
  id: 'label',
  title: 'label',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Input } from '@cantinc/ui'

innet(
  <Input
    label='Test field'
    inline
  />,
  dom,
)`,
  example: (
    <Input
      label='Test field'
      inline
    />
  ),
})
