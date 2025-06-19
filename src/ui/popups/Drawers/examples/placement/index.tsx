import { Portal, Show } from '@innet/dom'
import { Button, Drawer, Drawers, Flex } from 'src'
import { example } from 'src/app/Component'
import { State } from 'watch-state'

import description from './README.md'

const left = new State(false)
const top = new State(false)
const right = new State(false)
const bottom = new State(false)

function content (str: string, count = 100) {
  return [...new Array(count)].map(() => [str, <br />])
}

export default example({
  id: 'placement',
  title: 'placement',
  description,
  code: `import innet from 'innet'
import dom, { Portal, Show } from '@innet/dom'
import { State } from 'watch-state'

import { Drawers, Drawer, Button, Flex } from '@cantinc/ui'

const left = new State(false)
const top = new State(false)
const right = new State(false)
const bottom = new State(false)

function content (str: string, count = 100) {
  return [...new Array(count)].map(() => [str, <br />])
}

innet(
  <Flex wrap gap={16}>
    <Portal parent={document.body}>
      <Drawers>
        <Show when={left}>
          <Drawer
            padding={64}
            placement='left'
            onclose={() => { left.value = false }}>
            {content('Left')}
          </Drawer>
        </Show>
        <Show when={top}>
          <Drawer
            padding={64}
            placement='top'
            onclose={() => { top.value = false }}>
            {content('Top')}
          </Drawer>
        </Show>
        <Show when={right}>
          <Drawer
            padding={64}
            placement='right'
            onclose={() => { right.value = false }}>
            {content('Right')}
          </Drawer>
        </Show>
        <Show when={bottom}>
          <Drawer
            padding={64}
            placement='bottom'
            onclose={() => { bottom.value = false }}>
            {content('Bottom')}
          </Drawer>
        </Show>
      </Drawers>
    </Portal>
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
  </Flex>,
  dom,
)`,
  example: (
    <Flex wrap gap={16}>
      <Portal parent={document.body}>
        <Drawers>
          <Show when={left}>
            <Drawer
              padding={64}
              placement='left'
              onclose={() => { left.value = false }}>
              {content('Left')}
            </Drawer>
          </Show>
          <Show when={top}>
            <Drawer
              padding={64}
              placement='top'
              onclose={() => { top.value = false }}>
              {content('Top')}
            </Drawer>
          </Show>
          <Show when={right}>
            <Drawer
              padding={64}
              placement='right'
              onclose={() => { right.value = false }}>
              {content('Right')}
            </Drawer>
          </Show>
          <Show when={bottom}>
            <Drawer
              padding={64}
              placement='bottom'
              onclose={() => { bottom.value = false }}>
              {content('Bottom')}
            </Drawer>
          </Show>
        </Drawers>
      </Portal>
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
