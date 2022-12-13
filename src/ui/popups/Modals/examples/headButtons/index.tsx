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
import dom from '@innet/dom'
import { State } from 'watch-state'

import { Modals, Modal, Button } from '@cantinc/ui'

const show = new State(false)

innet(
  <>
    <Button onclick={() => { show.value = true }}>
      show
    </Button>
    <Modals>
      <show state={show}>
        <Modal headButtons={['Log-in', 'close']} onclose={() => { show.value = false }}>
          <slot name='title'>
            Sign-in
          </slot>
          <slot name='content'>
            Sign-in form should be here...
          </slot>
        </Modal>
      </show>
    </Modals>
  </>,
  dom,
)`,
  example: (
    <>
      <portal parent={document.body}>
        <Modals>
          <show state={show}>
            <Modal headButtons={['Log-in', 'close']} onclose={() => { show.value = false }}>
              <slot name='title'>
                Sign-in
              </slot>
              <slot name='content'>
                Sign-in form should be here...
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
