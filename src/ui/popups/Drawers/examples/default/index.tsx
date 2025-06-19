import { Portal, Show } from '@innet/dom'
import { BurgerButton, Drawer, Drawers } from 'src'
import { example } from 'src/app/Component'
import { State } from 'watch-state'

import description from './README.md'

const show = new State(false)

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom, { Show } from '@innet/dom'
import { State } from 'watch-state'

import { Drawers, Drawer, BurgerButton } from '@cantinc/ui'

const show = new State(false)

innet(
  <>
    <BurgerButton onclick={() => { show.value = true }} />
    <Drawers>
      <Show when={show}>
        <Drawer onclose={() => { show.value = false }}>
          Content
        </Drawer>
      </Show>
    </Drawers>
  </>,
  dom,
)`,
  example: (
    <>
      <Portal parent={document.body}>
        <Drawers>
          <Show when={show}>
            <Drawer onclose={() => { show.value = false }}>
              Content
            </Drawer>
          </Show>
        </Drawers>
      </Portal>
      <BurgerButton onclick={() => { show.value = true }} />
    </>
  ),
})
