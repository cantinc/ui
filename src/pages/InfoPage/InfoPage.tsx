import { Markdown, Typography } from 'src/ui'

import description from './README.md'

export default function InfoPage () {
  return (
    <Typography>
      <Markdown text={description} />
    </Typography>
  )
}
