import { example } from 'src/app/Component'
import { State } from 'watch-state'

import { Button } from '../../../../buttons'
import { Modal } from '../../../Modal'
import { Modals } from '../../Modals'
import description from './README.md'

const show = new State(false)

export default example({
  id: 'title',
  title: 'title',
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
      {() => show.value && (
        <Modal onclose={() => { show.value = false }}>
          <slot name='title'>
            Title
          </slot>
          <slot name='content'>
            Content
          </slot>
        </Modal>
      )}
    </Modals>
  </>,
  dom,
)`,
  example: (
    <>
      <portal parent={document.body}>
        <Modals>
          {() => show.value && (
            <Modal onclose={() => { show.value = false }}>
              <slot name='title'>
                Title
              </slot>
              <slot name='content'>
                Content
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
