import { example } from 'src/app/Component'
import { Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'element',
  title: 'Element',
  description,
  example: (
    <Flex<HTMLAnchorElement> element='a' href='/'>
      Home Page
    </Flex>
  ),
})
