import { example } from 'src/app/Component'
import { Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'element',
  title: 'Element',
  description,
  example: (
    <Flex element='a' href='/'>
      Home Page
    </Flex>
  ),
})
