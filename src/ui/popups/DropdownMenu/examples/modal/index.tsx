import { Portal, Ref, Show, use } from '@innet/dom'
import { Arrow, Button, DropdownMenu, type MenuOption, Modal, Modals } from 'src'
import { example } from 'src/app/Component'
import { State } from 'watch-state'

import description from './README.md'

const state = new State(false)
const modalState = new State(false)
const button = new Ref<HTMLButtonElement>()

const toggle = () => {
  state.value = !state.value
}
const hide = () => {
  state.value = false
}
const showModal = () => {
  modalState.value = true
}
const hideModal = () => {
  modalState.value = false
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
import dom, { Ref, use, Portal, Show } from '@innet/dom'
import { State } from 'watch-state'

import { Arrow, Button, DropdownMenu, MenuOption, Modals, Modal } from '@cantinc/ui'

const state = new State(false)
const modalState = new State(false)
const button = new Ref<HTMLButtonElement>()

const toggle = () => {
  state.value = !state.value
}
const hide = () => {
  state.value = false
}
const showModal = () => {
  modalState.value = true
}
const hideModal = () => {
  modalState.value = false
}

const values: MenuOption[] = [
  { value: '1', label: 'Test 1' },
  { value: '2', label: 'Test 2' },
  { value: '3', label: 'Test 3' },
]

innet(
  <>
    <Button onclick={showModal}>
      Click Me
    </Button>
    <Portal parent={document.body}>
      <Modals>
        <Show when={modalState}>
          <Modal headButtons={[]} onclose={hideModal}>
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
          </Modal>
        </Show>
      </Modals>
    </Portal>
  </>,
  dom,
)`,
  example: (
    <>
      <Button onclick={showModal}>
        Click Me
      </Button>
      <Portal parent={document.body}>
        <Modals>
          <Show when={modalState}>
            <Modal headButtons={[]} onclose={hideModal}>
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
            </Modal>
          </Show>
        </Modals>
      </Portal>
    </>
  ),
})
