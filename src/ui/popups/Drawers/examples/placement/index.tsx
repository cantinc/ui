import { Button, Drawer, Drawers, Flex, Show } from 'src'
import { example } from 'src/app/Component'
import { State } from 'watch-state'

import description from './README.md'

const left = new State(false)
const top = new State(false)
const right = new State(false)
const bottom = new State(false)

export default example({
  id: 'placement',
  title: 'placement',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'
import { State } from 'watch-state'

import { Drawers, Drawer, Button, Show, Flex } from '@cantinc/ui'

const left = new State(false)
const top = new State(false)
const right = new State(false)
const bottom = new State(false)

innet(
  <>
    <Flex gap={16}>
      <Button onclick={() => { left.value = true }}>
        Left
      </Button>
      <Button onclick={() => { top.value = true }}>
        Top
      </Button>
      <Button onclick={() => { right.value = true }}>
        Right
      </Button>
      <Button onclick={() => { bottom.value = true }}>
        Bottom
      </Button>
    </Flex>
    <Drawers>
      <Show state={left}>
        <Drawer
          padding={24}
          placement='left'
          onclose={() => { left.value = false }}>
          Left
        </Drawer>
      </Show>
      <Show state={top}>
        <Drawer
          padding={24}
          placement='top'
          onclose={() => { top.value = false }}>
          Top
        </Drawer>
      </Show>
      <Show state={right}>
        <Drawer
          padding={24}
          placement='right'
          onclose={() => { right.value = false }}>
          Right
        </Drawer>
      </Show>
      <Show state={bottom}>
        <Drawer
          padding={24}
          placement='bottom'
          onclose={() => { bottom.value = false }}>
          Bottom
        </Drawer>
      </Show>
    </Drawers>
  </>,
  dom,
)`,
  example: (
    <Flex gap={16}>
      <portal parent={document.body}>
        <Drawers>
          <Show state={left}>
            <Drawer
              padding={24}
              placement='left'
              onclose={() => { left.value = false }}>
              Left
            </Drawer>
          </Show>
          <Show state={top}>
            <Drawer
              padding={24}
              placement='top'
              onclose={() => { top.value = false }}>
              Top
            </Drawer>
          </Show>
          <Show state={right}>
            <Drawer
              padding={24}
              placement='right'
              onclose={() => { right.value = false }}>
              Right
            </Drawer>
          </Show>
          <Show state={bottom}>
            <Drawer
              padding={24}
              placement='bottom'
              onclose={() => { bottom.value = false }}>
              Bottom
            </Drawer>
          </Show>
        </Drawers>
      </portal>
      <Button onclick={() => { left.value = true }}>
        Left
      </Button>
      <Button onclick={() => { top.value = true }}>
        Top
      </Button>
      <Button onclick={() => { right.value = true }}>
        Right
      </Button>
      <Button onclick={() => { bottom.value = true }}>
        Bottom
      </Button>
    </Flex>
  ),
})
