import { Ref, use } from '@innet/dom'
import { Arrow, Button, Dropdown } from 'src'
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

export default example({
  id: 'focusAndClick',
  title: 'Focus & Click',
  description,
  code: `import innet from 'innet'
import dom, { Ref, use } from '@innet/dom'
import { State } from 'watch-state'

import { Arrow, Button, Dropdown } from '@cantinc/ui'

const state = new State(false)
const button = new Ref<HTMLButtonElement>()

const toggle = () => {
  state.value = !state.value
}
const hide = () => {
  state.value = false
}

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
    <Dropdown
      padding={16}
      show={state}
      element={button}>
      Test
    </Dropdown>
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
      <Dropdown
        padding={16}
        show={state}
        element={button}>
        Test
      </Dropdown>
    </>
  ),
})
