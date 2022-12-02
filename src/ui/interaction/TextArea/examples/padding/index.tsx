import { example } from 'src/app/Component'
import { Flex, TextArea } from 'src/ui'

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
      <TextArea
        flex
        padding={[0, 8]}
        inline
        placeholder='Placeholder...'
      />
      <TextArea
        flex
        padding={[14, 16, 4]}
        inline
        label='Label...'
      />
      <TextArea
        flex
        padding={[16, 8, 8, 16]}
        inline
        label='Label...'
      />
    </Flex>
  ),
})
