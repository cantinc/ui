import { example } from 'src/app/Component'
import { Button, Flex, Input } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'
const hint = new State('')

export default example({
  id: 'hint',
  title: 'hint',
  description,
  code: `import { State } from 'watch-state'
import { Flex, Button, Input } from '@cantinc/ui'

const hint = new State('')

return (
  <Flex vertical>
    <Input>
      <slot name='hint'>
        Static hint
      </slot>
    </Input>
    <Input>
      <slot name='hint'>
        {() => hint.value}
      </slot>
    </Input>
    <Button onclick={() => {
      hint.value = hint.value ? '' : 'Hint message...'
    }}>
      Click Me
    </Button>
  </Flex>
)`,
  example: (
    <Flex vertical>
      <Input>
        <slot name='hint'>
          Static hint
        </slot>
      </Input>
      <Input>
        <slot name='hint'>
          {() => hint.value}
        </slot>
      </Input>
      <Button onclick={() => {
        hint.value = hint.value ? '' : 'Hint message...'
      }}>
        Click Me
      </Button>
    </Flex>
  ),
})
