import { example } from 'src/app/Component'
import { Upload } from 'src/ui'

import description from './README.md'

export default example({
  id: 'multiple',
  title: 'multiple',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Upload } from '@cantinc/ui'

innet(
  <Upload
    multiple
    label='Upload a file'
    dragText='Move the file here'
    dropText='Drop the file here'
  />,
  dom,
)`,
  example: (
    <Upload
      multiple
      label='Upload a file'
      dragText='Move the file here'
      dropText='Drop the file here'
    />
  ),
})
