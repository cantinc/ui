import { example } from 'src/app/Component'
import { Button, Title } from 'src/ui'

import description from './README.md'

export default example({
  id: 'button',
  title: 'Button',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Title, Button } from '@cantinc/ui'

innet(
  <Title
    justify='between'
    align='end'
    h={2}
    title='Heading 2'>
    <Button
      element='a'
      href='/'
      padding={[8, 24]}
      view='secondary'>
      Home
    </Button>
  </Title>,
  dom,
)`,
  example: (
    <Title
      justify='between'
      align='end'
      h={2}
      vertical={false}
      title='Heading 2'>
      <Button
        element='a'
        href='/'
        padding={[8, 24]}
        view='secondary'>
        Home
      </Button>
    </Title>
  ),
})
