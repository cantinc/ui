import { example } from 'src/app/Component'
import { Input } from 'src/ui'

import description from './README.md'

export default example({
  id: 'inline',
  title: 'inline',
  description,
  code: `import { Input } from '@cantinc/ui'

return (
  <Input inline />
)`,
  example: (
    <Input inline />
  ),
})
