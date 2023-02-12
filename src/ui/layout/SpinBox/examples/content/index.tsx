import { example } from 'src/app/Component'
import { Button, Flex, SpinBox } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const loading = new State(true)

export default example({
  id: 'content',
  title: 'With content',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Flex, SpinBox, Button} from '@cantinc/ui'

innet(
  <Flex vertical>
    <SpinBox align='center' loading={loading}>
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
  </Flex>,
  dom,
)`,
  example: (
    <Flex align='stretch' gap={16} vertical>
      <SpinBox vertical align='center' loading={loading}>
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
