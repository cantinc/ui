import { example } from 'src/app/Component'
import { Markdown, Typography } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Markdown, Typography } from '@cantinc/ui'

innet(
  <Typography>
    <Markdown text='### Markdown header' />
  </Typography>,
  dom,
)`,
  example: (
    <Typography>
      <Markdown text='### Markdown header' />
    </Typography>
  ),
})
