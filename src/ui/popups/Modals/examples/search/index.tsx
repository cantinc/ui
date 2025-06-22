import { Link, Portal } from '@innet/dom'
import { Button, closeRouterModal, Flex, Modal, Modals, SearchRouter, type SearchRouting } from 'src'
import { example } from 'src/app/Component'

import description from './README.md'

const routing: SearchRouting = [
  {
    value: 'test1',
    component: () => (
      <Modal headButtons={[]}>
        <Button onclick={closeRouterModal}>
          Close
        </Button>
      </Modal>
    ),
  },
  {
    value: 'test2',
    component: () => (
      <Modal
        onclose={closeRouterModal}
        title='Test 2'
        content={(
          <Flex gap={16}>
            <Link href='?modal=test2&modal=test1'>
              Keep current modal
            </Link>
            <Link href='?modal=test1'>
              Hide current modal
            </Link>
          </Flex>
        )}
      />
    ),
  },
]

export default example({
  id: 'search-router',
  title: 'SearchRouter',
  description,
  code: `import innet from 'innet'
import dom, { Link } from '@innet/dom'

import { 
  Modals,
  Modal,
  Button,
  Flex,
  closeRouterModal,
  SearchRouting,
  SearchRouter
} from '@cantinc/ui'

const routing: SearchRouting = [
  {
    value: 'test1',
    component: () => (
      <Modal headButtons={[]}>
        <Button onclick={closeRouterModal}>
          Close
        </Button>
      </Modal>
    ),
  },
  {
    value: 'test2',
    component: () => (
      <Modal
        onclose={closeRouterModal}
        title='Test 2'
        content={(
          <Flex gap={16}>
            <Link href='?modal=test2&modal=test1'>
              Keep current modal
            </Link>
            <Link href='?modal=test1'>
              Hide current modal
            </Link>
          </Flex>
        )}
      />
    ),
  },
]

innet(
  <>
    <Modals>
      <SearchRouter key='modal' routing={routing} />
    </Modals>
    <Link href='?modal=test1'>Test 1</Link>
    <Link href='?modal=test2'>Test 2</Link>
  </>,
  dom,
)`,
  example: (
    <>
      <Portal parent={document.body}>
        <Modals>
          <SearchRouter key='modal' routing={routing} />
        </Modals>
      </Portal>
      <Link href='?modal=test1'>Test 1</Link>
      <Link href='?modal=test2'>Test 2</Link>
    </>
  ),
})
