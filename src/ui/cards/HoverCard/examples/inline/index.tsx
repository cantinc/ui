import { example } from 'src/app/Component'
import { HoverCard } from 'src/ui'

import description from './README.md'

export default example({
  id: 'inline',
  title: 'inline',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { HoverCard } from '@cantinc/ui'

innet(
  <HoverCard inline content='Test'>
    Title
  </HoverCard>,
  dom,
)`,
  example: (
    <HoverCard inline content='Test'>
      Title
    </HoverCard>
  ),
})
