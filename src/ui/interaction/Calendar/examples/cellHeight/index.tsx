import { inject } from '@innet/dom'
import { example } from 'src/app/Component'
import { Calendar, Input } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const height = new State(24)

export default example({
  id: 'cellHeight',
  title: 'cellHeight',
  description,
  code: `import innet from 'innet'
import dom, { inject } from '@innet/dom'
import { State } from 'watch-state'

import { Calendar, Input } from '@cantinc/ui'

const height = new State(24)

innet(
  <Calendar cellHeight={height}>
    <Input
      padding={[0, 8]}
      type='number'
      oninput={value => {
        height.value = Number(value)
      }}
      value={inject(height, String)}
    />
  </Calendar>,
  dom,
)`,
  example: (
    <Calendar cellHeight={height}>
      <Input
        padding={[0, 8]}
        type='number'
        oninput={value => {
          height.value = Number(value)
        }}
        value={inject(height, String)}
      />
    </Calendar>
  ),
})
