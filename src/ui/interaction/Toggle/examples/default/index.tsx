import { example } from 'src/app/Component'
import { Toggle } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const state = new State(false)

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'
import { State } from 'watch-state'

import { Toggle } from '@cantinc/ui'

const state = new State(false)

innet(
  <Toggle
    value={() => state.value}
    onchange={value => { state.value = value }}
  />,
  dom,
)`,
  example: (
    <Toggle
      value={() => state.value}
      onchange={value => { state.value = value }}
    />
  ),
})
