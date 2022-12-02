import { example } from 'src/app/Component'
import { Flex, TextArea } from 'src/ui'

import description from './README.md'

export default example({
  id: 'resize',
  title: 'resize',
  description,
  components: {
    [Flex.name]: 'Flex',
  },
  example: (
    <Flex vertical>
      <TextArea label='auto' placeholder='Default value' resize='auto' />
      <TextArea resize />
      <TextArea label='vertical' resize='vertical' />
      <TextArea label='horizontal' resize='horizontal' />
      <TextArea label='both' resize='both' />
      <TextArea label='none' resize='none' />
    </Flex>
  ),
})
