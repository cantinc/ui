import { example } from 'src/app/Component'
import { Flex, Input } from 'src/ui'

import description from './README.md'

export default example({
  id: 'padding',
  title: 'padding',
  description,
  code: `import { Flex, Input } from '@cantinc/ui'

return (
  <Flex gap={[0, 8]} wrap>
    <Input
      flex
      padding={[0, 8]}
      placeholder='Placeholder...'
    />
    <Input
      flex
      padding={8}
      label='Label...'
    />
    <Input
      flex
      padding={[16, 8, 8, 16]}
      label='Label...'
    />
  </Flex>
)`,
  example: (
    <Flex gap={[0, 8]} wrap>
      <Input
        flex
        padding={[0, 8]}
        placeholder='Placeholder...'
      />
      <Input
        flex
        padding={8}
        label='Label...'
      />
      <Input
        flex
        padding={[16, 8, 8, 16]}
        label='Label...'
      />
    </Flex>
  ),
})
