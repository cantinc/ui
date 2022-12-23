import { Markdown, Typography } from 'src/ui'

import description from './README.md'

export default function HomePage () {
  return (
    <Typography>
      <Markdown text={description} />
    </Typography>
  )
}
