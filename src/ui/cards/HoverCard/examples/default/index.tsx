import { example } from 'src/app/Component'
import { HoverCard } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { HoverCard } from '@cantinc/ui'

innet(
  <HoverCard>
    Title
    <slot name='content'>
      Content
    </slot>
  </HoverCard>,
  dom,
)`,
  example: (
    <HoverCard>
      Title
      <slot name='content'>
        Content
      </slot>
    </HoverCard>
  ),
})
