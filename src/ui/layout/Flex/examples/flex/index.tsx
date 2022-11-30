import { example } from 'src/app/Component'
import { Flex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'flex',
  title: 'Flex',
  description,
  example: (
    <Flex>
      <Flex flex={2} style='background:var(--color-80);padding:10px'>66%</Flex>
      <Flex flex style='background:var(--color-60);padding:10px'>33%</Flex>
    </Flex>
  ),
})
