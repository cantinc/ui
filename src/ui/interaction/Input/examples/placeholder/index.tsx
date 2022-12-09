import { example } from 'src/app/Component'
import { Input } from 'src/ui'

import description from './README.md'

export default example({
  id: 'placeholder',
  title: 'placeholder',
  description,
  code: `import { Input } from '@cantinc/ui'

return (
  <Input
    inline
    placeholder='Placeholder'
  />
)`,
  example: (
    <Input
      inline
      placeholder='Placeholder'
    />
  ),
})
