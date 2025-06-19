import { Portal, Show } from '@innet/dom'
import { Button, Icon, Modal, Modals } from 'src'
import { example } from 'src/app/Component'
import { State } from 'watch-state'

import description from './README.md'

const show = new State(false)

export default example({
  id: 'titleOnly',
  title: 'Title Only',
  description,
  code: `import innet from 'innet'
import dom, { Show } from '@innet/dom'
import { State } from 'watch-state'

import { Modals, Modal, Button, Icon } from '@cantinc/ui'

const show = new State(false)

innet(
  <>
    <Button onclick={() => { show.value = true }}>
      show
    </Button>
    <Modals>
      <Show when={show}>
        <Modal
          title='Do you like this modal?'
          headButtons={['accept', 'close']}
          buttonChildren={{
            accept: <Icon icon='check' />,
          }}
          onclose={() => { show.value = false }}
        />
      </Show>
    </Modals>
  </>,
  dom,
)`,
  example: (
    <>
      <Portal parent={document.body}>
        <Modals>
          <Show when={show}>
            <Modal
              title='Do you like this modal?'
              headButtons={['accept', 'close']}
              buttonChildren={{
                accept: <Icon icon='check' />,
              }}
              onclose={() => { show.value = false }}
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
