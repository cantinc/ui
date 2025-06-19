import { example } from 'src/app/Component'
import { Input, ToggleBar, type ToggleBarOption } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const value = new State('')

const values: ToggleBarOption[] = [
  { value: '', label: 'Home' },
  { value: 'settings', label: 'Settings' },
  { value: 'help', label: 'Help' },
]

export default example({
  id: 'value',
  title: 'value',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'
import { State } from 'watch-state'

import { Input, ToggleBar, ToggleBarValue } from '@cantinc/ui'

const value = new State('')
const values: ToggleBarValue[] = [
  { value: '', label: 'Home' },
  { value: 'settings', label: 'Settings' },
  { value: 'help', label: 'Help' },
]

innet(
  <>
    <Input value={value} label='Value' />
    <ToggleBar value={value} values={values} />
  </>,
  dom,
)`,
  example: (
    <>
      <Input value={value} label='Value' />
      <ToggleBar value={value} values={values} />
    </>
  ),
})
