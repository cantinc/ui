import { inject } from '@innet/dom'
import { example } from 'src/app/Component'
import { Calendar, Flex, Input } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const height = new State(120)

export default example({
  id: 'cellHeight',
  title: 'cellHeight',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Calendar } from '@cantinc/ui'

innet(
  <Calendar />,
  dom,
)`,
  example: (
    <Flex gap={16} vertical align='stretch'>
      <Input
        type='number'
        oninput={value => {
          height.value = Number(value)
        }}
        value={inject(height, String)}
      />
      <Calendar cellHeight={height} />
    </Flex>
  ),
})
