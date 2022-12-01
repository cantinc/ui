import { example } from 'src/app/Component'
import { Button, Flex, Input } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const error = new State('')

export default example({
  id: 'hintError',
  title: 'hint & error',
  description,
  components: {
    [Flex.name]: 'Flex',
    [Button.name]: 'Button',
  },
  example: (
    <Flex vertical>
      <Input error={() => Boolean(error.value)}>
        <slot name='hint'>
          {() => error.value || 'Hint message...'}
        </slot>
      </Input>
      <Button onclick={() => {
        error.value = error.value ? '' : 'Error message...'
      }}>
        Click Me
      </Button>
    </Flex>
  ),
})
