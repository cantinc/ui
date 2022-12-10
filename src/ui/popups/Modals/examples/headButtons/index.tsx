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
  code: `import { Modals, Modal, Button } from '@cantinc/ui'
import { State } from 'watch-state'

const show = new State(false)

return (
  <>
    <portal parent={document.body}>
      <Modals>
        {() => show.value && (
          <Modal headButtons={['Log-in', 'close']} onclose={() => { show.value = false }}>
            <slot name='title'>
              Sign-in
            </slot>
            <slot name='content'>
              Sign-in form should be here...
            </slot>
          </Modal>
        )}
      </Modals>
    </portal>
    <Button onclick={() => { show.value = true }}>
      show
    </Button>
  </>
)`,
  example: (
    <>
      <portal parent={document.body}>
        <Modals>
          {() => show.value && (
            <Modal headButtons={['Log-in', 'close']} onclose={() => { show.value = false }}>
              <slot name='title'>
                Sign-in
              </slot>
              <slot name='content'>
                Sign-in form should be here...
              </slot>
            </Modal>
          )}
        </Modals>
      </portal>
      <Button onclick={() => { show.value = true }}>
        show
      </Button>
    </>
  ),
})
