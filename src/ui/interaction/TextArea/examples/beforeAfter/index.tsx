import { example } from 'src/app/Component'
import { Icon, TextArea } from 'src/ui'

import description from './README.md'

export default example({
  id: 'beforeAfter',
  title: 'before & after',
  description,
  components: {
    [Icon.name]: 'Icon',
  },
  example: (
    <TextArea
      placeholder='Enter count'
      gap={8}
      inline>
      <slot name='before'>
        <Icon icon='minus' />
      </slot>
      <slot name='after'>
        <Icon icon='plus' />
      </slot>
    </TextArea>
  ),
})
