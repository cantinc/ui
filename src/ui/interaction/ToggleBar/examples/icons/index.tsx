import { example } from 'src/app/Component'
import { ToggleBar, type ToggleBarValue } from 'src/ui'

import description from './README.md'

const values: ToggleBarValue[] = [
  { value: '', label: 'Home', icon: 'default' },
  { value: 'settings', label: 'Settings', icon: 'cross' },
  { value: 'help', label: 'Edit', icon: 'edit' },
]

export default example({
  id: 'icons',
  title: 'icons',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { ToggleBar, ToggleBarValue } from '@cantinc/ui'

const values: ToggleBarValue[] = [
  { value: '', label: 'Home', icon: 'default' },
  { value: 'settings', label: 'Settings', icon: 'cross' },
  { value: 'help', label: 'Edit', icon: 'edit' },
]

innet(
  <ToggleBar padding={[24, 0]} values={values} />,
  dom,
)`,
  example: (
    <ToggleBar padding={[24, 0]} values={values} />
  ),
})
