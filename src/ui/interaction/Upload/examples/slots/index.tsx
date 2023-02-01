import { example } from 'src/app/Component'
import { Icon, Upload } from 'src/ui'

import description from './README.md'

export default example({
  id: 'slots',
  title: 'slots',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Upload, Icon } from '@cantinc/ui'

innet(
  <Upload multiple label='Upload a file'>
    <slot name='before'>
      <Icon />
    </slot>
    <slot name='after'>
      <Icon icon='brick' />
    </slot>
  </Upload>,
  dom,
)`,
  example: (
    <Upload multiple label='Upload a file'>
      <slot name='before'>
        <Icon />
      </slot>
      <slot name='after'>
        <Icon icon='brick' />
      </slot>
    </Upload>
  ),
})
