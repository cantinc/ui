import { example } from 'src/app/Component'
import { HoverCard } from 'src/ui'

import description from './README.md'

export default example({
  id: 'padding',
  title: 'padding',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { HoverCard } from '@cantinc/ui'

innet(
  <HoverCard
    vertical
    content={<span>Content</span>}
    padding={8}
    width={180}>
    <span>Title</span>
  </HoverCard>,
  dom,
)`,
  example: (
    <HoverCard
      vertical
      content={<span>Content</span>}
      padding={8}
      width={180}>
      <span>Title</span>
    </HoverCard>
  ),
})
