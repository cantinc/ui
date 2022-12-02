import { example } from 'src/app/Component'
import { Button, Flex, TextArea } from 'src/ui'
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
      <TextArea>
        <slot name='hint'>
          Static hint
        </slot>
      </TextArea>
      <TextArea>
        <slot name='hint'>
          {() => hint.value}
        </slot>
      </TextArea>
      <Button onclick={() => {
        hint.value = hint.value ? '' : 'Hint message...'
      }}>
        Click Me
      </Button>
    </Flex>
  ),
})
