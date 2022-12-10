import { example } from 'src/app/Component'
import { Markdown } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Markdown } from '@cantinc/ui'

innet(
  <Markdown text='### Markdown \`header\`' />,
  dom,
)`,
  example: (
    <Markdown text='### Markdown `header`' />
  ),
})
