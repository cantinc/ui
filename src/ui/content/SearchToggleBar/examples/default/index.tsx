import { example } from 'src/app/Component'
import { SearchToggleBar } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
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
