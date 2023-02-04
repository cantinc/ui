import { example } from 'src/app/Component'
import { Divider, Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'vertical',
  title: 'vertical',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Divider, Flex } from '@cantinc/ui'

innet(
  <Flex align='stretch'>
    <a href='/'>Home</a>
    <Divider vertical />
    <a href='/typography'>
      Typography
    </a>
    <Divider vertical />
    <a href='/typography/divider'>
      Settings
    </a>
  </Flex>,
  dom,
)`,
  example: (
    <Flex align='stretch'>
      <a href='/'>Home</a>
      <Divider vertical />
      <a href='/typography'>
        Typography
      </a>
      <Divider vertical />
      <a href='/typography/divider'>
        Settings
      </a>
    </Flex>
  ),
})
