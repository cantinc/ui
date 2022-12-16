import { example } from 'src/app/Component'
import { ToggleBar, ToggleBarValue } from 'src/ui'

import description from './README.md'

const values: ToggleBarValue[] = [
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
  <ToggleBar padding={8} values={values} />,
  dom,
)`,
  example: (
    <ToggleBar padding={8} values={values} />
  ),
})
