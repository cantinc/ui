import { example } from 'src/app/Component'
import { ToggleBar } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const state = new State('')

export default example({
  id: 'default',
  title: 'ToggleBar',
  description,
  example: (
    <ToggleBar
      element='nav'
      gap={16}
      value={() => state.value}
      onchange={value => {
        state.value = value
      }}
      values={[
        { value: 'on' },
        { value: '', label: 'auto' },
        { value: 'off' },
      ]}
    />
  ),
})
