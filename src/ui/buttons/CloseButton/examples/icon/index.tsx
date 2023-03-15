import { example } from 'src/app/Component'
import { Card, CloseButton } from 'src/ui'

import description from './README.md'

export default example({
  id: 'icon',
  title: 'icon',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Card, CloseButton } from '@cantinc/ui'

innet(
  <Card preventAnimation width={280} height={200}>
    <CloseButton icon='arrowLeft' placement='topLeft' />
  </Card>,
  dom,
)`,
  example: (
    <Card preventAnimation width={280} height={200}>
      <CloseButton icon='arrowLeft' placement='topLeft' />
    </Card>
  ),
})
