import { example } from 'src/app/Component'
import { Button, Space, Title } from 'src/ui'

import description from './README.md'

export default example({
  id: 'button',
  title: 'button',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Title, Space, Button } from '@cantinc/ui'

innet(
  <Title
    align='end'
    h={2}
    text='Heading 2'>
    <Space />
    <Button
      padding={[8, 24]}
      view='secondary'>
      Header button
    </Button>
  </Title>,
  dom,
)`,
  example: (
    <Title
      align='end'
      h={2}
      text='Heading 2'>
      <Space />
      <Button
        padding={[8, 24]}
        view='secondary'>
        Header button
      </Button>
    </Title>
  ),
})
