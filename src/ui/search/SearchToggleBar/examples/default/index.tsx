import { example } from 'src/app/Component'
import { SearchToggleBar } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { SearchToggleBar } from '@cantinc/ui'

innet(
  <SearchToggleBar
    key='test'
    values={[
      { value: 'on' },
      { value: '', label: 'auto' },
      { value: 'off' },
    ]}
  />,
  dom,
)`,
  example: (
    <SearchToggleBar
      key='test'
      values={[
        { value: 'on' },
        { value: '', label: 'auto' },
        { value: 'off' },
      ]}
    />
  ),
})
