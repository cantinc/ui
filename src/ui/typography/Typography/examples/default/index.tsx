import { example } from 'src/app/Component'
import { Markdown, Typography } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `<Typography>
  <Markdown text='### Markdown header' />
</Typography>`,
  example: (
    <Typography>
      <Markdown text='### Markdown header' />
    </Typography>
  ),
})
