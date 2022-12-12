import { Button, closeRouterModal, Modal, Modals, withModal } from 'src'
import { example } from 'src/app/Component'

import description from './README.md'

export default example({
  id: 'search',
  title: 'search',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Modals, Modal, Button, closeRouterModal } from '@cantinc/ui'

innet(
  <>
    <a href='?modal=test1'>Test 1</a>
    <a href='?modal=test2'>Test 2</a>
    <Modals>
      <router ish search='modal'>
        <slot name='test1'>
          <Modal headButtons={[]}>
            <Button onclick={closeRouterModal}>
              Close
            </Button>
          </Modal>
        </slot>
        <slot name='test2'>
          <Modal onclose={closeRouterModal}>
            <slot name='title'>
              Test 2
            </slot>
            <slot name='content'>
              <a href={() => \`?\${withModal('test1')}\`}>
                Test 1
              </a>
            </slot>
          </Modal>
        </slot>
      </router>
    </Modals>
  </>,
  dom,
)`,
  example: (
    <>
      <portal parent={document.body}>
        <Modals>
          <router ish search='modal'>
            <slot name='test1'>
              <Modal headButtons={[]}>
                <Button onclick={closeRouterModal}>
                  Close
                </Button>
              </Modal>
            </slot>
            <slot name='test2'>
              <Modal onclose={closeRouterModal}>
                <slot name='title'>
                  Test 2
                </slot>
                <slot name='content'>
                  <a href={() => `?${withModal('test1')}`}>
                    Test 1
                  </a>
                </slot>
              </Modal>
            </slot>
          </router>
        </Modals>
      </portal>
      <a href='?modal=test1'>Test 1</a>
      <a href='?modal=test2'>Test 2</a>
    </>
  ),
})
