import { DelayPage, Markdown, Typography } from 'src/ui'

import description from './README.md'

export function HomePage () {
  return (
    <DelayPage>
      <Typography>
        <Markdown text={description} />
      </Typography>
    </DelayPage>
  )
}
