import { example } from 'src/app/Component'
import { Button, Flex, notify } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const loading = new State(true)

export default example({
  id: 'loading',
  title: 'Loading',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'
import { State } from 'watch-state'

import { Flex, Button, notify } from '@cantinc/ui'

const loading = new State(false)

innet(
  <Flex wrap gap={8}>
    <Button onclick={() => { loading.value = !loading.value }}>
      Click Me
    </Button>
    <Button
      view='secondary'
      size='small'
      loading={loading}
      onclick={() => notify('clicked')}>
      Some button
    </Button>
  </Flex>,
  dom,
)`,
  example: (
    <Flex wrap gap={8}>
      <Button onclick={() => { loading.value = !loading.value }}>
        Click Me
      </Button>
      <Button
        view='secondary'
        padding={[16, 24]}
        loading={loading}
        onclick={() => notify('clicked')}>
        Some button
      </Button>
    </Flex>
  ),
})
