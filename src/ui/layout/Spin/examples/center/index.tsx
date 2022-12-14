import { example } from 'src/app/Component'
import { Flex, Spin } from 'src/ui'

import description from './README.md'

export default example({
  id: 'center',
  title: 'Center',
  description,
  code: `<Flex vertical align='stretch' style='width:200px;height:200px;background:var(--color-60)'>
  <Spin flex align='center' justify='center' />
</Flex>`,
  example: (
    <Flex
      vertical
      align='stretch'
      style={{
        width: '200px',
        height: '200px',
        background: 'var(--color-60)',
      }}>
      <Spin flex align='center' justify='center' />
    </Flex>
  ),
})
