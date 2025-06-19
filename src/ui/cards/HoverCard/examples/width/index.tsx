import { example } from 'src/app/Component'
import { HoverCard } from 'src/ui'

import description from './README.md'

export default example({
  id: 'width',
  title: 'width',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { HoverCard } from '@cantinc/ui'

innet(
  <HoverCard width={180} content='Content'>
    Title
  </HoverCard>,
  dom,
)`,
  example: (
    <HoverCard width={180} content='Content'>
      Title
    </HoverCard>
  ),
})
