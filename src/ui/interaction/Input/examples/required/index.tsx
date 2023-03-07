import { example } from 'src/app/Component'
import { Flex, Input } from 'src/ui'

import description from './README.md'

export default example({
  id: 'required',
  title: 'required',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Flex, Input } from '@cantinc/ui'

innet(
  <Flex vertical>
    <Input label='Required' required />
    <Input label='hideRequiredStar' required hideRequiredStar />
  </Flex>,
  dom,
)`,
  example: (
    <Flex vertical>
      <Input label='Required' required />
      <Input label='Star' required='star' />
    </Flex>
  ),
})
