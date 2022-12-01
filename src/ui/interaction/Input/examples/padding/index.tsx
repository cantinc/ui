import { example } from 'src/app/Component'
import { Flex, Input } from 'src/ui'

import description from './README.md'

export default example({
  id: 'padding',
  title: 'padding',
  description,
  components: {
    [Flex.name]: 'Flex',
  },
  example: (
    <Flex gap={[0, 8]} wrap>
      <Input
        flex
        padding={[0, 8]}
        inline
        placeholder='Placeholder...'
      />
      <Input
        flex
        padding={8}
        inline
        label='Label...'
      />
      <Input
        flex
        padding={[16, 8, 8, 16]}
        inline
        label='Label...'
      />
    </Flex>
  ),
})
