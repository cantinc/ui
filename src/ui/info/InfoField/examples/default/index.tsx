import { example } from 'src/app/Component'
import { InfoField } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { InfoField } from '@cantinc/ui'

innet(
  <InfoField label='Label' value='Value' />,
  dom,
)`,
  example: (
    <InfoField label='Label' value='Value' />
  ),
})
