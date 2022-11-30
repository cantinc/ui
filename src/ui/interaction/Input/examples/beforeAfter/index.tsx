import { example } from 'src/app/Component'
import { Icon, Input } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const state = new State('')

export default example({
  id: 'beforeAfter',
  title: 'before & after',
  description,
  components: {
    [Icon.name]: 'Icon',
  },
  example: (
    <Input
      placeholder='Enter count'
      value={() => state.value}
      onchange={value => { state.value = value }}
      gap={8}
      inline>
      <slot name='before'>
        <Icon icon='minus' />
      </slot>
      <slot name='after'>
        <Icon icon='plus' />
      </slot>
    </Input>
  ),
})
