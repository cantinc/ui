import { example } from 'src/app/Component'
import { Checkbox } from 'src/ui'
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

import { Checkbox } from '@cantinc/ui'

const state = new State(true)

innet(
  <Checkbox
    label={() => String(state.value)}
    value={state}
  />,
  dom,
)`,
  example: (
    <Checkbox
      label={() => String(state.value)}
      checked={state}
    />
  ),
})
