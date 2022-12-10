import { example } from 'src/app/Component'
import { TextArea } from 'src/ui'

import description from './README.md'

export default example({
  id: 'labelPlaceholder',
  title: 'label & placeholder',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { TextArea } from '@cantinc/ui'

innet(
  <TextArea
    label='Label'
    placeholder='Placeholder...'
  />,
  dom,
)`,
  example: (
    <TextArea
      label='Label'
      placeholder='Placeholder...'
    />
  ),
})
