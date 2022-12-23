import { Markdown, Typography } from 'src/ui'

import description from './README.md'

export default function LayoutPage () {
  return (
    <Typography>
      <Markdown text={description} />
    </Typography>
  )
}
