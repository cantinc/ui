import { example } from 'src/app/Component'
import { Markdown } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import { Markdown } from '@cantinc/ui'

return (
  <Markdown text='### Markdown \`header\`' />
)`,
  example: (
    <Markdown text='### Markdown `header`' />
  ),
})
