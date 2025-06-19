import { Portal, Show } from '@innet/dom'
import { Button, Modal, Modals, notify } from 'src'
import { example } from 'src/app/Component'
import { State } from 'watch-state'

import description from './README.md'

const show = new State(false)

export default example({
  id: 'buttons',
  title: 'buttons',
  description,
  code: `import innet from 'innet'
import dom, { Show } from '@innet/dom'
import { State } from 'watch-state'

import { Modals, Modal, Notifications, Button, notify } from '@cantinc/ui'

const show = new State(false)

innet(
  <>
    <Button onclick={() => { show.value = true }}>
      show
    </Button>
    <Modals>
      <Show when={show}>
        <Modal
          buttons={['Ok', 'Cancel']}
          content='Content'
          onclose={result => {
            show.value = false
            notify(result)
          }}
        />
      </Show>
    </Modals>
    <Notifications />
  </>,
  dom,
)`,
  example: (
    <>
      <Portal parent={document.body}>
        <Modals>
          <Show when={show}>
            <Modal
              buttons={['Ok', 'Cancel']}
              content='Content'
              onclose={result => {
                show.value = false
                notify(result)
              }}
            />
          </Show>
        </Modals>
      </Portal>
      <Button onclick={() => { show.value = true }}>
        show
      </Button>
    </>
  ),
})
