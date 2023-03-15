import { example } from 'src/app/Component'
import { Card, CloseButton } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Card, CloseButton } from '@cantinc/ui'

innet(
  <Card preventAnimation width={200} height={200}>
    <CloseButton />
  </Card>,
  dom,
)`,
  example: (
    <Card preventAnimation width={200} height={200}>
      <CloseButton />
    </Card>
  ),
})
