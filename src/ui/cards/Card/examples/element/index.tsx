import { example } from 'src/app/Component'
import { Card } from 'src/ui'

import description from './README.md'

export default example({
  id: 'element',
  title: 'element',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Card } from '@cantinc/ui'

innet(
  <Card
    inline
    element='a'
    clickable
    href='/'>
    Home page
  </Card>,
  dom,
)`,
  example: (
    <Card
      inline
      element='a'
      clickable
      href='/'>
      Home page
    </Card>
  ),
})
