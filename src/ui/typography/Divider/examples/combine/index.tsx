import { example } from 'src/app/Component'
import { Divider, Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'combine',
  title: 'Combine',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Divider, Flex } from '@cantinc/ui'

innet(
  <Divider>
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
  </Divider>,
  dom,
)`,
  example: (
    <Divider>
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
    </Divider>
  ),
})
