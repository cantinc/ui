import { Markdown, Page, Typography } from 'src/ui'

import description from './README.md'

export default function HomePage () {
  return (
    <Page>
      <Typography>
        <Markdown text={description} />
      </Typography>
    </Page>
  )
}
