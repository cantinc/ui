import { example } from 'src/app/Component'
import { Button, Flex } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const loading = new State(false)

export default example({
  id: 'loading',
  title: 'Loading',
  description,
  example: (
    <Flex wrap gap={8}>
      <Button onclick={() => { loading.value = !loading.value }}>
        Click Me
      </Button>
      <Button
        onclick={() => alert('clicked')}
        loading={() => loading.value}>
        Some button
      </Button>
    </Flex>
  ),
})
