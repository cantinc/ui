import { Ref } from '@innet/dom'
import { Button, Buttons, Content, Flex, Popout, Typography } from 'src'
import { example } from 'src/app/Component'
import { State } from 'watch-state'

import description from './README.md'

const state = new State(false)
const button = new Ref<HTMLButtonElement>()
const button1 = new Ref<HTMLButtonElement>()
const button2 = new Ref<HTMLButtonElement>()

const show1 = () => {
  button.value = button1.value
  state.value = true
}
const show2 = () => {
  button.value = button2.value
  state.value = true
}
const hide = () => {
  state.value = false
}

export default example({
  id: 'dynamicElement',
  title: 'Dynamic Element',
  description,
  code: `import innet from 'innet'
import dom, { Ref } from '@innet/dom'
import { State } from 'watch-state'

import { Content, Button, Popout, Typography, Buttons } from '@cantinc/ui'

const state = new State(false)
const button = new Ref<HTMLButtonElement>()
const button1 = new Ref<HTMLButtonElement>()
const button2 = new Ref<HTMLButtonElement>()

const show1 = () => {
  button.value = button1.value
  state.value = true
}
const show2 = () => {
  button.value = button2.value
  state.value = true
}
const hide = () => {
  state.value = false
}

innet(
  <Flex wrap gap={16}>
    <Button
      onclick={show1}
      ref={button1}>
      Click Me
    </Button>
    <Button
      onclick={show2}
      ref={button2}>
      Click Me
    </Button>
    <Popout
      padding={16}
      show={state}
      element={button}>
      <Content width={480} gap={16} vertical>
        <Typography>
          <h2>Answer for next question</h2>
          <p>Is it looks like a modal?</p>
        </Typography>
        <Buttons gap={16}>
          <Button flex view='negative' onclick={hide}>
            No
          </Button>
          <Button flex view='positive' onclick={hide}>
            Yes
          </Button>
        </Buttons>
      </Content>
    </Popout>
  </Flex>,
  dom,
)`,
  example: (
    <Flex wrap gap={16}>
      <Button
        view='negative'
        onclick={show1}
        ref={button1}>
        Click Me
      </Button>
      <Button
        view='positive'
        onclick={show2}
        ref={button2}>
        Click Me
      </Button>
      <Popout
        padding={16}
        show={state}
        element={button}>
        <Content width={480} gap={16} vertical>
          <Typography>
            <h2>Answer for next question</h2>
            <p>Is it looks like a modal?</p>
          </Typography>
          <Buttons gap={16}>
            <Button flex view='negative' onclick={hide}>
              No
            </Button>
            <Button flex view='positive' onclick={hide}>
              Yes
            </Button>
          </Buttons>
        </Content>
      </Popout>
    </Flex>
  ),
})
