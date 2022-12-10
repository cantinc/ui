import { example } from 'src/app/Component'
import { Flex, Space } from 'src/ui'

import description from './README.md'

export default example({
  id: 'center',
  title: 'Center',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Flex, Space } from '@cantinc/ui'

innet(
  <Flex style='background:var(--color-80)'>
    <Space />
    <div style='background:var(--color-60);padding:10px'>Element</div>
    <Space />
  </Flex>,
  dom,
)`,
  example: (
    <Flex style='background:var(--color-80)'>
      <Space />
      <div style='background:var(--color-60);padding:10px'>Element</div>
      <Space />
    </Flex>
  ),
})
