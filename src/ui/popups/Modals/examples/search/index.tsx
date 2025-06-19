import { Link, Portal } from '@innet/dom'
import { Button, closeRouterModal, Flex, Modal, Modals } from 'src'
import { example } from 'src/app/Component'

import description from './README.md'

export default example({
  id: 'search',
  title: 'search',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Modals, Modal, Button, Flex, closeRouterModal } from '@cantinc/ui'

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
              <Flex gap={16}>
                <a href='?modal=test2&modal=test1'>
                  Keep current modal
                </a>
                <a href='?modal=test1'>
                  Hide current modal
                </a>
              </Flex>
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
      <Portal parent={document.body}>
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
                  <Flex gap={16}>
                    <a href='?modal=test2&modal=test1'>
                      Keep current modal
                    </a>
                    <a href='?modal=test1'>
                      Hide current modal
                    </a>
                  </Flex>
                </slot>
              </Modal>
            </slot>
          </router>
        </Modals>
      </Portal>
      <Link href='?modal=test1'>Test 1</Link>
      <Link href='?modal=test2'>Test 2</Link>
    </>
  ),
})
