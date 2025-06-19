import { example } from 'src/app/Component'
import { ToggleBar, type ToggleBarOption } from 'src/ui'

import description from './README.md'

const values: ToggleBarOption[] = [
  { value: '', label: 'Home' },
  { value: 'settings', label: 'Settings' },
  { value: 'help', label: 'Help' },
]

export default example({
  id: 'padding',
  title: 'padding',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { ToggleBar, ToggleBarValue } from '@cantinc/ui'

const values: ToggleBarValue[] = [
  { value: '', label: 'Home' },
  { value: 'settings', label: 'Settings' },
  { value: 'help', label: 'Help' },
]

innet(
  <ToggleBar padding={[8, 0]} values={values} />,
  dom,
)`,
  example: (
    <ToggleBar padding={[8, 0]} values={values} />
  ),
})
