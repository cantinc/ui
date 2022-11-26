import { example } from 'src/app/Component'
import { Flex, Icon, icons } from 'src/ui'

import description from './README.md'

export default example({
  id: 'content',
  title: 'Content',
  description,
  components: {
    [Flex.name]: 'Flex',
  },
  example: (
    <Flex gap={16} wrap>
      {Object.keys(icons).map(key => (
        <Icon icon={key as any}>
          {key}
        </Icon>
      ))}
    </Flex>
  ),
})
