import { example } from 'src/app/Component'
import { Divider } from 'src/ui'

import description from './README.md'

export default example({
  id: 'content',
  title: 'Content',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Divider } from '@cantinc/ui'

innet(
  <Divider>
    Content
  </Divider>,
  dom,
)`,
  example: (
    <Divider>
      Content
    </Divider>
  ),
})
