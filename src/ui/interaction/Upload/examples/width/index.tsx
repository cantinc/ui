import { example } from 'src/app/Component'
import { Upload } from 'src/ui'

import description from './README.md'

export default example({
  id: 'width',
  title: 'width',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Upload } from '@cantinc/ui'

innet(
  <Upload
    width={180}
    label='Upload a file'
  />,
  dom,
)`,
  example: (
    <Upload
      width={180}
      label='Upload a file'
    />
  ),
})
