import { example } from 'src/app/Component'
import { Input } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const state = new State('')

export default example({
  id: 'labelPlaceholder',
  title: 'label & placeholder',
  description,
  example: (
    <Input
      value={() => state.value}
      onchange={value => { state.value = value }}
      label='Test field'
      placeholder='Test...'
      inline
    />
  ),
})
