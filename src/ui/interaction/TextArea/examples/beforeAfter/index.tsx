import { example } from 'src/app/Component'
import { Icon, TextArea } from 'src/ui'

import description from './README.md'

export default example({
  id: 'beforeAfter',
  title: 'before & after',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { TextArea, Icon } from '@cantinc/ui'

innet(
  <TextArea
    placeholder='Enter count'
    gap={8}
    inline>
    <slot name='before'>
      <Icon />
    </slot>
    <slot name='after'>
      <Icon />
    </slot>
  </TextArea>,
  dom,
)`,
  example: (
    <TextArea
      placeholder='Enter count'
      gap={8}
      inline>
      <slot name='before'>
        <Icon />
      </slot>
      <slot name='after'>
        <Icon />
      </slot>
    </TextArea>
  ),
})
