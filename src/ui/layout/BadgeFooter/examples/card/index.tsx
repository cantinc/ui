import { example } from 'src/app/Component'
import { BadgeFooter, Card } from 'src/ui'

import description from './README.md'

export default example({
  id: 'card',
  title: 'Card',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { BadgeFooter, Card } from '@cantinc/ui'

innet(
  <Card inline padding={[16, 16, 48]}>
    Content
    <BadgeFooter justify='center'>
      footer
    </BadgeFooter>
  </Card>,
  dom,
)`,
  example: (
    <Card inline padding={[16, 16, 48]}>
      Content
      <BadgeFooter offset={1}>
        footer
      </BadgeFooter>
    </Card>
  ),
})
