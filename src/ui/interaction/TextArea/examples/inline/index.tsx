import { example } from 'src/app/Component'
import { TextArea } from 'src/ui'

import description from './README.md'

export default example({
  id: 'inline',
  title: 'inline',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { TextArea } from '@cantinc/ui'

innet(
  <TextArea inline />,
  dom,
)`,
  example: (
    <TextArea inline />
  ),
})
