import { example } from 'src/app/Component'
import { Input } from 'src/ui'

import description from './README.md'

export default example({
  id: 'labelPlaceholder',
  title: 'label & placeholder',
  description,
  code: `import { Input } from '@cantinc/ui'

return (
  <Input
    label='Test field'
    placeholder='Test...'
    inline
  />
)`,
  example: (
    <Input
      label='Test field'
      placeholder='Test...'
      inline
    />
  ),
})
