import { example } from 'src/app/Component'
import { Flex, Input } from 'src/ui'

import description from './README.md'

export default example({
  id: 'labelPlaceholder',
  title: 'label & placeholder',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Input, Flex } from '@cantinc/ui'

innet(
  <Flex gap={16} wrap>
    <Input
      flex
      label='Label'
    />
    <Input
      flex
      placeholder='Placeholder'
    />
    <Input
      flex
      label='Label'
      placeholder='Placeholder'
    />
  </Flex>,
  dom,
)`,
  example: (
    <Flex gap={16} wrap>
      <Input
        flex
        label='Label'
      />
      <Input
        flex
        placeholder='Placeholder'
      />
      <Input
        flex
        label='Label'
        placeholder='Placeholder'
      />
    </Flex>
  ),
})
