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