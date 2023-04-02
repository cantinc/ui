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
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'
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
      <show when={state}>
        <DatePicker
          apply='Apply'
          onclose={hide}>
          Title
        </DatePicker>
      </show>
    </Modals>
  </>,
  dom,
)`,
  example: (
    <>
      <Button onclick={show}>
        Show
      </Button>
      <portal parent={document.body}>
        <Modals>
          <show when={state}>
            <DatePicker
              apply='Apply'
              onclose={hide}>
              Title
            </DatePicker>
          </show>
        </Modals>
      </portal>
    </>
  ),
})
