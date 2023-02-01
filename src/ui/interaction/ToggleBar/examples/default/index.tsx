import { example } from 'src/app/Component'
import { ToggleBar, type ToggleBarValue } from 'src/ui'

import description from './README.md'

const values: ToggleBarValue[] = [
  { value: 'on' },
  { value: '', label: 'auto' },
  { value: 'off' },
]

export default example({
  id: 'default',
  title: 'ToggleBar',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { ToggleBar, ToggleBarValue } from '@cantinc/ui'

const values: ToggleBarValue[] = [
  { value: 'on' },
  { value: '', label: 'auto' },
  { value: 'off' },
]

innet(
  <ToggleBar values={values} />,
  dom,
)`,
  example: (
    <ToggleBar values={values} />
  ),
})
