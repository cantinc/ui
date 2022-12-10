import { Button, Modal, Modals, notify } from 'src'
import { example } from 'src/app/Component'
import { State } from 'watch-state'

import description from './README.md'

const show = new State(false)

export default example({
  id: 'buttons',
  title: 'buttons',
  description,
  code: `import { Modals, Modal, Button, notify } from '@cantinc/ui'
import { State } from 'watch-state'

const show = new State(false)

return (
  <>
    <portal parent={document.body}>
      <Modals>
        {() => show.value && (
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
          )}
        </Modals>
      </portal>
      <Button onclick={() => { show.value = true }}>
        show
      </Button>
    </>
  ),
})
