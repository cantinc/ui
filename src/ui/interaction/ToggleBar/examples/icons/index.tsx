import { example } from 'src/app/Component'
import { ToggleBar, ToggleBarValue } from 'src/ui'

import description from './README.md'

const values: ToggleBarValue[] = [
  { value: '', label: 'Home', icon: 'cant' },
  { value: 'settings', label: 'Settings', icon: 'gear' },
  { value: 'help', label: 'Location', icon: 'location' },
]

export default example({
  id: 'icons',
  title: 'icons',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { ToggleBar, ToggleBarValue } from '@cantinc/ui'

const values: ToggleBarValue[] = [
  { value: '', label: 'Home', icon: 'cant' },
  { value: 'settings', label: 'Settings', icon: 'gear' },
  { value: 'help', label: 'Location', icon: 'location' },
]

innet(
  <ToggleBar padding={[24, 0]} values={values} />,
  dom,
)`,
  example: (
    <ToggleBar padding={[24, 0]} values={values} />
  ),
})
