import { Portal, Show } from '@innet/dom'
import { Button, DatePicker, Modals } from 'src'
import { example } from 'src/app/Component'
import { State } from 'watch-state'

import description from './README.md'

const state = new State(false)

const show = () => {
  state.value = true
}
const hide = () => {
  state.value = false
}

export default example({
  id: 'max',
  title: 'max',
  description,
  code: `import innet from 'innet'
import dom, { Show } from '@innet/dom'
import { State } from 'watch-state'

import { DatePicker, Modals, Button } from '@cantinc/ui'

const state = new State(false)

const show = () => {
  state.value = true
}
const hide = () => {
  state.value = false
}

innet(
  <>
    <Button onclick={show}>
      Show
    </Button>
    <Modals>
      <Show when={state}>
        <DatePicker
          max={new Date()}
          apply='Apply'
          onclose={hide}>
          Title
        </DatePicker>
      </Show>
    </Modals>
  </>,
  dom,
)`,
  example: (
    <>
      <Button onclick={show}>
        Show
      </Button>
      <Portal parent={document.body}>
        <Modals>
          <Show when={state}>
            <DatePicker
              max={new Date()}
              apply='Apply'
              onclose={hide}>
              Title
            </DatePicker>
          </Show>
        </Modals>
      </Portal>
    </>
  ),
})
