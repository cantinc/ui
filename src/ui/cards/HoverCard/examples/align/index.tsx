import { example } from 'src/app/Component'
import { HoverCard } from 'src/ui'

import description from './README.md'

export default example({
  id: 'align',
  title: 'align',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { HoverCard } from '@cantinc/ui'

innet(
  <HoverCard content={<span>Content</span>} align='end' vertical width={180}>
    <span>Title</span>
  </HoverCard>,
  dom,
)`,
  example: (
    <HoverCard content={<span>Content</span>} align='end' vertical width={180}>
      <span>Title</span>
    </HoverCard>
  ),
})
