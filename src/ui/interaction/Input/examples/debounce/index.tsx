import { example } from 'src/app/Component'
import { Flex, Input } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const state = new State('')

export default example({
  id: 'debounce',
  title: 'debounce',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'
import { State } from 'watch-state'

import { Input } from '@cantinc/ui'

const state = new State('')

innet(
  <Flex vertical gap={16}>
    <Input value={state} debounce />
    {state}
  </Flex>,
  dom,
)`,
  example: (
    <Flex vertical gap={16}>
      <Input value={state} label='Test' debounce />
      {state}
    </Flex>
  ),
})
