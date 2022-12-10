import { example } from 'src/app/Component'
import { Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'element',
  title: 'element',
  description,
  code: `import { Flex } from '@cantinc/ui'

return (
  <Flex<HTMLAnchorElement> element='a' href='/'>
    Home Page
  </Flex>
)`,
  example: (
    <Flex<HTMLAnchorElement> element='a' href='/'>
      Home Page
    </Flex>
  ),
})
