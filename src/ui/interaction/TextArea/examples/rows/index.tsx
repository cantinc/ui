import { example } from 'src/app/Component'
import { Flex, TextArea } from 'src/ui'

import description from './README.md'

export default example({
  id: 'rows',
  title: 'rows',
  description,
  code: `<Flex align='stretch' vertical>
  <TextArea rows={1} />
  <TextArea resize='none' rows={1} />
  <TextArea resize='none' rows={3} />
</Flex>`,
  example: (
    <Flex align='stretch' vertical>
      <TextArea rows={1} />
      <TextArea resize='none' rows={1} />
      <TextArea resize='none' rows={3} />
    </Flex>
  ),
})
