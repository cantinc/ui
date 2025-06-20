import { example } from 'src/app/Component'
import { Button, Flex, Input } from 'src/ui'
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

import { Button, Flex, Input } from '@cantinc/ui'

const error = new State('')

innet(
  <Flex vertical>
    <Input error />
    <Input placeholder='Placeholder' error />
    <Input label='Label' error />
    <Input error hint='Static error' />
    <Input
      hint={error}
      error={() => Boolean(error.value)}
    />
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
      <Input error />
      <Input placeholder='Placeholder' error />
      <Input label='Label' error />
      <Input error hint='Static error' />
      <Input
        hint={error}
        error={() => Boolean(error.value)}
      />
      <Button onclick={() => {
        error.value = error.value ? '' : 'Error message...'
      }}>
        Click Me
      </Button>
    </Flex>
  ),
})
