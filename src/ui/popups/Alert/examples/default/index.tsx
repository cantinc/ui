import { Alert } from 'src'
import { example } from 'src/app/Component'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Alert } from '@cantinc/ui'

innet(
  <Alert view='success'>
    Alert content
  </Alert>,
  dom,
)`,
  example: (
    <Alert view='success'>
      Alert content
    </Alert>
  ),
})
