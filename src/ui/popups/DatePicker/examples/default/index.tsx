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

import { DatePicker, Modals } from '@cantinc/ui'

innet(
  <Modals>
    <DatePicker />
  </Modals>,
  dom,
)`,
  example: (
    <>
      <Button onclick={show}>
        Show
      </Button>
      <portal parent={document.body}>
        <Modals>
          <show state={state}>
            <DatePicker
              apply='Apply'
              min={new Date(2023, 0, 20)}
              max={new Date(2023, 3, 20)}
              onclose={hide}>
              Title
            </DatePicker>
          </show>
        </Modals>
      </portal>
    </>
  ),
})
