import { Link } from '@innet/dom'
import { example } from 'src/app/Component'
import { Divider, Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'combine',
  title: 'Combine',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Divider, Flex, Link } from '@cantinc/ui'

innet(
  <Divider>
    <Flex align='stretch'>
      <Link href='/'>Home</Link>
      <Divider vertical />
      <Link href='/typography'>
        Typography
      </Link>
      <Divider vertical />
      <Link href='/typography/divider'>
        Settings
      </Link>
    </Flex>
  </Divider>,
  dom,
)`,
  example: (
    <Divider>
      <Flex align='stretch'>
        <Link href='/'>Home</Link>
        <Divider vertical />
        <Link href='/typography'>
          Typography
        </Link>
        <Divider vertical />
        <Link href='/typography/divider'>
          Settings
        </Link>
      </Flex>
    </Divider>
  ),
})
