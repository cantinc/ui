import { example } from 'src/app/Component'
import { Upload } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Upload } from '@cantinc/ui'

innet(
  <Upload
    label='Upload a file'
  />,
  dom,
)`,
  example: (
    <Upload
      label='Upload a file'
    />
  ),
})
