import { example } from 'src/app/Component'
import { Toggle } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const state = new State(true)

export default example({
  id: 'label',
  title: 'label',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'
import { State } from 'watch-state'

import { Toggle } from '@cantinc/ui'

const state = new State(true)

innet(
  <Toggle
    label={() => String(state.value)}
    value={state}
  />,
  dom,
)`,
  example: (
    <Toggle
      label={() => String(state.value)}
      value={state}
    />
  ),
})
