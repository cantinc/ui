import { example } from 'src/app/Component'
import { Button, Flex, TextArea } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const error = new State('')

export default example({
  id: 'error',
  title: 'error',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'
import { State } from 'watch-state'

import { Flex, TextArea, Button } from '@cantinc/ui'

const error = new State('')

innet(
  <Flex vertical>
    <TextArea error />
    <TextArea placeholder='Placeholder' error />
    <TextArea label='Label' error />
    <TextArea error>
      <slot name='hint'>
        Static error
      </slot>
    </TextArea>
    <TextArea error={() => Boolean(error.value)}>
      <slot name='hint'>
        {() => error.value}
      </slot>
    </TextArea>
    <Button onclick={() => {
      error.value = error.value ? '' : 'Error message...'
    }}>
      Click Me
    </Button>
  </Flex>,
  dom,
)`,
  example: (
    <Flex vertical>
      <TextArea error />
      <TextArea placeholder='Placeholder' error />
      <TextArea label='Label' error />
      <TextArea error>
        <slot name='hint'>
          Static error
        </slot>
      </TextArea>
      <TextArea error={() => Boolean(error.value)}>
        <slot name='hint'>
          {() => error.value}
        </slot>
      </TextArea>
      <Button onclick={() => {
        error.value = error.value ? '' : 'Error message...'
      }}>
        Click Me
      </Button>
    </Flex>
  ),
})
