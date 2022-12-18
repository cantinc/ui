import { Ref } from '@innet/dom'
import { Arrow, Button, ElementPopup } from 'src'
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

import { Button, ElementPopup } from '@cantinc/ui'

const show = new State(false)
const button = new Ref<HTMLButtonElement>()

innet(
  <>
    <Button
      onclick={() => {
        show.value = !show.value
      }}
      ref={button}>
      Click Me
    </Button>
    <ElementPopup
      padding={16}
      show={show}
      element={button}>
      Test
    </ElementPopup>
  </>,
  dom,
)`,
  example: (
    <>
      <Button
        gap={16}
        onclick={() => {
          show.value = !show.value
        }}
        ref={button}>
        <span>Click Me</span>
        <Arrow color='var(--color-100)' top={show} />
      </Button>
      <ElementPopup
        padding={16}
        show={show}
        element={button}>
        Test
      </ElementPopup>
    </>
  ),
})
