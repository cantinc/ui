import { example } from 'src/app/Component'
import { HoverCard } from 'src/ui'

import description from './README.md'

export default example({
  id: 'reverse',
  title: 'reverse',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { HoverCard } from '@cantinc/ui'

innet(
  <HoverCard
    vertical
    reverse
    content={<span>Content</span>}>
    <span>Title</span>
  </HoverCard>,
  dom,
)`,
  example: (
    <HoverCard
      vertical
      reverse
      content={<span>Content</span>}>
      <span>Title</span>
    </HoverCard>
  ),
})
