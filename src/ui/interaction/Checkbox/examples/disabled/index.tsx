import { example } from 'src/app/Component'
import { Checkbox, Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'disabled',
  title: 'disabled',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Checkbox, Flex } from '@cantinc/ui'

innet(
  <Flex inline wrap gap={16}>
    <Checkbox disabled label='Label' />
    <Checkbox disabled checked label='Label' />
  </Flex>,
  dom,
)`,
  example: (
    <Flex inline wrap gap={16}>
      <Checkbox disabled label='Label' />
      <Checkbox disabled checked label='Label' />
    </Flex>
  ),
})
