import { example } from 'src/app/Component'
import { Input } from 'src/ui'

import description from './README.md'

export default example({
  id: 'labelPlaceholder',
  title: 'label & placeholder',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Input } from '@cantinc/ui'

innet(
  <Input
    label='Test field'
    placeholder='Test...'
    inline
  />,
  dom,
)`,
  example: (
    <Input
      label='Test field'
      placeholder='Test...'
      inline
    />
  ),
})
