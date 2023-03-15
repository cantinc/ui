import { example } from 'src/app/Component'
import { Card, CloseButton } from 'src/ui'

import description from './README.md'

export default example({
  id: 'placement',
  title: 'placement',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Card, CloseButton } from '@cantinc/ui'

innet(
  <Card preventAnimation width={220} height={220}>
    <CloseButton placement='topRight' />
    <CloseButton placement='right' />
    <CloseButton placement='bottomRight' />
    <CloseButton placement='bottom' />
    <CloseButton placement='bottomLeft' />
    <CloseButton placement='left' />
    <CloseButton placement='topLeft' />
    <CloseButton placement='top' />
  </Card>,
  dom,
)`,
  example: (
    <Card preventAnimation width={220} height={220}>
      <CloseButton placement='topRight' />
      <CloseButton placement='right' />
      <CloseButton placement='bottomRight' />
      <CloseButton placement='bottom' />
      <CloseButton placement='bottomLeft' />
      <CloseButton placement='left' />
      <CloseButton placement='topLeft' />
      <CloseButton placement='top' />
    </Card>
  ),
})
