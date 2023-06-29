import { example } from 'src/app/Component'
import { Title } from 'src/ui'

import description from './README.md'

export default example({
  id: 'upTitle',
  title: 'upTitle',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Title } from '@cantinc/ui'

innet(
  <Title
    h={2}
    title='Heading 2'
    subtitle='Subtitle'
    vertical
    reverse
  />,
  dom,
)`,
  example: (
    <Title
      h={2}
      title='Heading 2'
      subtitle='Subtitle'
      vertical
      reverse
    />
  ),
})
