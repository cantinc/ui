import { Ref } from '@innet/dom'
import { Arrow, Button, Dropdown } from 'src'
import { example } from 'src/app/Component'
import { State } from 'watch-state'

import description from './README.md'

const show = new State(false)
const button = new Ref<HTMLButtonElement>()

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom, { Ref } from '@innet/dom'
import { State } from 'watch-state'

import { Arrow, Button, Dropdown } from '@cantinc/ui'

const show = new State(false)
const button = new Ref<HTMLButtonElement>()

innet(
  <>
    <Button
      padding={8}
      gap={8}
      onclick={() => {
        show.value = !show.value
      }}
      ref={button}>
      Click Me
      <Arrow
        color='var(--color-100)'
        top={show}
      />
    </Button>
    <Dropdown
      padding={16}
      show={show}
      element={button}>
      Test
    </Dropdown>
  </>,
  dom,
)`,
  example: (
    <>
      <Button
        padding={8}
        gap={8}
        onclick={() => {
          show.value = !show.value
        }}
        ref={button}>
        Click Me
        <Arrow
          color='var(--color-100)'
          top={show}
        />
      </Button>
      <Dropdown
        padding={16}
        show={show}
        element={button}>
        Test
      </Dropdown>
    </>
  ),
})
