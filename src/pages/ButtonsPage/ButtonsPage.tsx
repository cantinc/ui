import { Markdown, Typography } from 'src/ui'

import description from './README.md'

export default function ButtonsPage () {
  return (
    <Typography>
      <Markdown text={description} />
    </Typography>
  )
}
