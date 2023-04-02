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
import dom from '@innet/dom'
import { State } from 'watch-state'

import { Drawers, Drawer, BurgerButton } from '@cantinc/ui'

const show = new State(false)

innet(
  <>
    <BurgerButton onclick={() => { show.value = true }} />
    <Drawers>
      <show when={show}>
        <Drawer onclose={() => { show.value = false }}>
          Content
        </Drawer>
      </show>
    </Drawers>
  </>,
  dom,
)`,
  example: (
    <>
      <portal parent={document.body}>
        <Drawers>
          <show when={show}>
            <Drawer onclose={() => { show.value = false }}>
              Content
            </Drawer>
          </show>
        </Drawers>
      </portal>
      <BurgerButton onclick={() => { show.value = true }} />
    </>
  ),
})
