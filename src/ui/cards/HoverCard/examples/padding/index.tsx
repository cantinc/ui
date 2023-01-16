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
  <HoverCard vertical padding={8} width={180}>
    <span>Title</span>
    <slot name='content'>
      <span>Content</span>
    </slot>
  </HoverCard>,
  dom,
)`,
  example: (
    <HoverCard vertical padding={8} width={180}>
      <span>Title</span>
      <slot name='content'>
        <span>Content</span>
      </slot>
    </HoverCard>
  ),
})
