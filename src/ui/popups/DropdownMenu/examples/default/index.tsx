import { Ref, use } from '@innet/dom'
import { Arrow, Button, DropdownMenu, MenuOption } from 'src'
import { example } from 'src/app/Component'
import { State } from 'watch-state'

import description from './README.md'

const state = new State(false)
const button = new Ref<HTMLButtonElement>()

const toggle = () => {
  state.value = !state.value
}
const hide = () => {
  state.value = false
}

const values: MenuOption[] = [
  { value: '1', label: 'Test 1' },
  { value: '2', label: 'Test 2' },
  { value: '3', label: 'Test 3' },
]

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom, { Ref, use } from '@innet/dom'
import { State } from 'watch-state'

import { Arrow, Button, DropdownMenu, MenuOption } from '@cantinc/ui'

const state = new State(false)
const button = new Ref<HTMLButtonElement>()

const toggle = () => {
  state.value = !state.value
}
const hide = () => {
  state.value = false
}
const values: MenuOption[] = [
  { value: '1', label: 'Test 1' },
  { value: '2', label: 'Test 2' },
  { value: '3', label: 'Test 3' },
]

innet(
  <>
    <Button
      padding={8}
      gap={8}
      onclick={toggle}
      onblur={hide}
      ref={button}>
      Click Me
      <Arrow
        color='var(--color-100)'
        direction={() => use(state) ? 'top' : 'down'}
      />
    </Button>
    <DropdownMenu
      onSelect={hide}
      values={values}
      show={state}
      element={button}>
      Test
    </DropdownMenu>
  </>,
  dom,
)`,
  example: (
    <>
      <Button
        padding={8}
        gap={8}
        onclick={toggle}
        onblur={hide}
        ref={button}>
        Click Me
        <Arrow
          color='var(--color-100)'
          direction={() => use(state) ? 'top' : 'down'}
        />
      </Button>
      <DropdownMenu
        onSelect={hide}
        values={values}
        show={state}
        element={button}
      />
    </>
  ),
})
