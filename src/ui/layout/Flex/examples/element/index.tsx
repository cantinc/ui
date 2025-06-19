import { example } from 'src/app/Component'
import { Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'element',
  title: 'element',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Flex } from '@cantinc/ui'

innet(
  <Flex element='a' href='/'>
    Home Page
  </Flex>,
  dom,
)`,
  example: (
    <Flex element='a' href='/'>
      Home Page
    </Flex>
  ),
})
