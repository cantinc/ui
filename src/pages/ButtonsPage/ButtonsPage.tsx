import { Markdown, Page, Typography } from 'src/ui'

import description from './README.md'

export default function ButtonsPage () {
  return (
    <Page>
      <Typography>
        <Markdown text={description} />
      </Typography>
    </Page>
  )
}
