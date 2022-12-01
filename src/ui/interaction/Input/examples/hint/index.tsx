import { example } from 'src/app/Component'
import { Button, Flex, Input } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'
const hint = new State('')

export default example({
  id: 'hint',
  title: 'hint',
  description,
  components: {
    [Flex.name]: 'Flex',
    [Button.name]: 'Button',
  },
  example: (
    <Flex vertical>
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
