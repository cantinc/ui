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
import dom from '@innet/dom'
import { State } from 'watch-state'

import { Modals, Modal, Button, Icon } from '@cantinc/ui'

const show = new State(false)

innet(
  <>
    <Button onclick={() => { show.value = true }}>
      show
    </Button>
    <Modals>
      <show state={show}>
        <Modal headButtons={['accept', 'close']} onclose={() => { show.value = false }}>
          <slot name='title'>
            Do you like this modal?
          </slot>
          <slot name='button-accept'>
            <Icon icon='check' />
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
            <Modal headButtons={['accept', 'close']} onclose={() => { show.value = false }}>
              <slot name='title'>
                Do you like this modal?
              </slot>
              <slot name='button-accept'>
                <Icon icon='check' />
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
