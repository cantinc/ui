import { example } from 'src/app/Component'
import { Button, Flex, Input } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'
const hint = new State('')

export default example({
  id: 'hint',
  title: 'hint',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'
import { State } from 'watch-state'

import { Flex, Button, Input } from '@cantinc/ui'

const hint = new State('')

innet(
  <Flex vertical>
    <Input hint='Static hint' />
    <Input hint={hint} />
    <Button onclick={() => {
      hint.value = hint.value ? '' : 'Hint message...'
    }}>
      Click Me
    </Button>
  </Flex>,
  dom,
)`,
  example: (
    <Flex vertical>
      <Input hint='Static hint' />
      <Input hint={hint} />
      <Button onclick={() => {
        hint.value = hint.value ? '' : 'Hint message...'
      }}>
        Click Me
      </Button>
    </Flex>
  ),
})
