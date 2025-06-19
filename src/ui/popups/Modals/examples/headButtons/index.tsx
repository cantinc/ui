import { Portal, Show } from '@innet/dom'
import { example } from 'src/app/Component'
import { State } from 'watch-state'

import { Button } from '../../../../buttons'
import { Modal } from '../../../Modal'
import { Modals } from '../../Modals'
import description from './README.md'

const show = new State(false)

export default example({
  id: 'head-buttons',
  title: 'headButtons',
  description,
  code: `import innet from 'innet'
import dom, { Show } from '@innet/dom'
import { State } from 'watch-state'

import { Modals, Modal, Button } from '@cantinc/ui'

const show = new State(false)

innet(
  <>
    <Button onclick={() => { show.value = true }}>
      show
    </Button>
    <Modals>
      <Show when={show}>
        <Modal
          title='Sign-in'
          content='Sign-in form should be here...'
          headButtons={['Log-in', 'close']} onclose={() => { show.value = false }}
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
              title='Sign-in'
              content='Sign-in form should be here...'
              headButtons={['Log-in', 'close']} onclose={() => { show.value = false }}
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
