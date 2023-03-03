import { example } from 'src/app/Component'
import { Markdown } from 'src/ui'

import description from './README.md'

export default example({
  id: 'json',
  title: 'json',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Markdown } from '@cantinc/ui'

innet(
  <Markdown text='\`\`\`json\\n{}\\n\`\`\`' />,
  dom,
)`,
  example: (
    <Markdown text={'```json\n{}\n```'} />
  ),
})
