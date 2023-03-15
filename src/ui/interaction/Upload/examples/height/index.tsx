import { example } from 'src/app/Component'
import { Upload } from 'src/ui'

import description from './README.md'

export default example({
  id: 'height',
  title: 'height',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Upload } from '@cantinc/ui'

innet(
  <Upload
    height={38}
    width={38}
    multiple
    label='Upload a file'
  />,
  dom,
)`,
  example: (
    <Upload
      height={38}
      width={38}
      multiple
      label='Upload a file'
    />
  ),
})
