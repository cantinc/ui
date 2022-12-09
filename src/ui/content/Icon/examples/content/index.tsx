import { example } from 'src/app/Component'
import { Flex, Icon, icons } from 'src/ui'

import description from './README.md'

export default example({
  id: 'content',
  title: 'Content',
  description,
  code: `<Flex gap={16} wrap>
  {Object.keys(icons).map(key => (
    <Icon icon={key as any}>
      {key}
    </Icon>
  ))}
</Flex>`,
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
