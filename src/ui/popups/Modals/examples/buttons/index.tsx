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
import dom from '@innet/dom'
import { State } from 'watch-state'

import { Modals, Modal, Notifications, Button, notify } from '@cantinc/ui'

const show = new State(false)

innet(
  <>
    <Button onclick={() => { show.value = true }}>
      show
    </Button>
    <Modals>
      <show when={show}>
        <Modal
          buttons={['Ok', 'Cancel']}
          onclose={result => {
            show.value = false
            notify(result)
          }}>
          <slot name='content'>
            Content
          </slot>
        </Modal>
      </show>
    </Modals>
    <Notifications />
  </>,
  dom,
)`,
  example: (
    <>
      <portal parent={document.body}>
        <Modals>
          <show when={show}>
            <Modal
              buttons={['Ok', 'Cancel']}
              onclose={result => {
                show.value = false
                notify(result)
              }}>
              <slot name='content'>
                Content
              </slot>
            </Modal>
          </show>
        </Modals>
      </portal>
      <Button onclick={() => { show.value = true }}>
        show
      </Button>
    </>
  ),
})
