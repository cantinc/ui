import { example } from 'src/app/Component'
import { HoverCard } from 'src/ui'

import description from './README.md'

export default example({
  id: 'gap',
  title: 'gap',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { HoverCard } from '@cantinc/ui'

innet(
  <HoverCard gap={16} vertical width={180}>
    <span>Title</span>
    <slot name='content'>
      <span>Content</span>
    </slot>
  </HoverCard>,
  dom,
)`,
  example: (
    <HoverCard gap={16} vertical width={180}>
      <span>Title</span>
      <span style={{ 'font-size': '12px' }}>Subtitle</span>
      <slot name='content'>
        <span>Content</span>
      </slot>
    </HoverCard>
  ),
})
