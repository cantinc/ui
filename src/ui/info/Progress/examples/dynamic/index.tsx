import { example } from 'src/app/Component'
import { Flex, InputNumber, Progress } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const progress = new State(0)

export default example({
  id: 'dynamic',
  title: 'Dynamic',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Progress } from '@cantinc/ui'

innet(
  <Progress value={0.5} />,
  dom,
)`,
  example: (
    <Flex vertical align='stretch'>
      <InputNumber
        value={progress}
        step={0.01}
        min={0}
        max={1}
      />
      <Progress value={progress} />
    </Flex>
  ),
})
