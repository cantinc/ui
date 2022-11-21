import { example } from 'src/app/Component'
import { Button, Flex, SpinBox } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const loading = new State(true)

export default example({
  id: 'content',
  title: 'With content',
  description,
  example: (
    <Flex vertical>
      <SpinBox align='center' loading={() => loading.value}>
        <span>
          Top
        </span>
        <span>
          Content
        </span>
        <span>
          Bottom
        </span>
      </SpinBox>
      <Button onclick={() => { loading.value = !loading.value }}>
        Switch
      </Button>
    </Flex>
  ),
})
