import { Markdown, Typography } from 'src/ui'

import description from './README.md'

export default function CardsPage () {
  return (
    <Typography>
      <Markdown text={description} />
    </Typography>
  )
}
