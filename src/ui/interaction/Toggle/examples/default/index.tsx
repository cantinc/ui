import { example } from 'src/app/Component'
import { Toggle } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const state = new State(false)

export default example({
  id: 'default',
  title: 'Default',
  description,
  example: (
    <Toggle
      value={() => state.value}
      onchange={value => { state.value = value }}
    />
  ),
})
