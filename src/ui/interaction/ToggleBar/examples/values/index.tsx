import { example } from 'src/app/Component'
import { Button, Flex, Input, ToggleBar, type ToggleBarValue } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const value = new State('')
const label = new State('')

const values = new State<ToggleBarValue[]>([
  { value: '', label: 'Home' },
  { value: 'settings', label: 'Settings' },
  { value: 'help', label: 'Help' },
])

const add = () => {
  if (!values.value.find(({ value: val }) => value.value === val)) {
    values.value.push({ value: value.value, label: label.value })
    values.update()
  }
}

const remove = () => {
  const removeValue = value.value
  value.value = ''
  label.value = ''
  values.value = values.value.filter(({ value }) => value !== removeValue)
}

export default example({
  id: 'values',
  title: 'Dynamic values',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'
import { State } from 'watch-state'

import { Input, ToggleBar, ToggleBarValue } from '@cantinc/ui'

const value = new State('')
const label = new State('')

const values = new State<ToggleBarValue[]>([
  { value: '', label: 'Home' },
  { value: 'settings', label: 'Settings' },
  { value: 'help', label: 'Help' },
])

const add = () => {
  if (!values.value.find(({ value: val }) => value.value === val)) {
    values.value.push({ value: value.value, label: label.value })
    values.update()
  }
}

const remove = () => {
  const removeValue = value.value
  value.value = ''
  label.value = ''
  values.value = values.value.filter(({ value }) => value !== removeValue)
}

innet(
  <>
    <Flex justify='center' padding={8} wrap gap={16}>
      <Input flex value={value} label='Value' />
      <Input flex value={label} label='Label' />
      <Button onclick={add}>
        Add
      </Button>
      <Button view='negative' onclick={remove}>
        Delete
      </Button>
    </Flex>
    <ToggleBar value={value} values={values} />
  </>,
  dom,
)`,
  example: (
    <>
      <Flex justify='center' padding={8} wrap gap={16}>
        <Input flex value={value} label='Value' />
        <Input flex value={label} label='Label' />
        <Button onclick={add}>
          Add
        </Button>
        <Button view='negative' onclick={remove}>
          Delete
        </Button>
      </Flex>
      <ToggleBar value={value} values={values} />
    </>
  ),
})
