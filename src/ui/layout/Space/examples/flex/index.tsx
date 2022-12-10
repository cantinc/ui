import { example } from 'src/app/Component'
import { Flex, Space } from 'src/ui'

import description from './README.md'

export default example({
  id: 'flex',
  title: 'flex',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Flex, Space } from '@cantinc/ui'

innet(
  <Flex style='background:var(--color-80)'>
    <Space flex={2} />
    <div style='background:var(--color-40);padding:10px'>DIV</div>
    <Space />
  </Flex>,
  dom,
)`,
  example: (
    <Flex style='background:var(--color-80)'>
      <Space flex={2} />
      <div style='background:var(--color-40);padding:10px'>DIV</div>
      <Space />
    </Flex>
  ),
})
