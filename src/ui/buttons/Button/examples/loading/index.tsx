import { example } from 'src/app/Component'
import { Button, Flex } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const loading = new State(false)

export default example({
  id: 'loading',
  title: 'Loading',
  description,
  components: {
    [Flex.name]: 'Flex',
  },
  example: (
    <Flex wrap gap={8}>
      <Button onclick={() => { loading.value = !loading.value }}>
        Click Me
      </Button>
      <Button
        view='secondary'
        size='small'
        loading={() => loading.value}
        onclick={() => alert('clicked')}>
        Some button
      </Button>
    </Flex>
  ),
})
