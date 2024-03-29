import { Ref } from '@innet/dom'
import { Button, Buttons, Card, Content, Popout, Typography } from 'src'
import { example } from 'src/app/Component'
import { State } from 'watch-state'

import description from './README.md'

const state = new State(false)
const button = new Ref<HTMLButtonElement>()

const show = () => {
  state.value = true
}
const hide = () => {
  state.value = false
}

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom, { Ref } from '@innet/dom'
import { State } from 'watch-state'

import {
  Content,
  Button,
  Popout,
  Typography,
  Buttons,
  Card
} from '@cantinc/ui'

const state = new State(false)
const button = new Ref<HTMLButtonElement>()

const show = () => {
  state.value = true
}
const hide = () => {
  state.value = false
}

innet(
  <>
    <Button
      onclick={show}
      ref={button}>
      Click Me
    </Button>
    <Popout
      closeButton
      padding={16}
      show={state}
      element={button}>
      <Content width={480}>
        <Card flex preventAnimation vertical align='stretch' gap={16}>
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
        </Card>
      </Content>
    </Popout>
  </>,
  dom,
)`,
  example: (
    <>
      <Button
        onclick={show}
        ref={button}>
        Click Me
      </Button>
      <Popout
        closeButton
        padding={16}
        show={state}
        element={button}>
        <Content width={480}>
          <Card flex preventAnimation vertical align='stretch' gap={16}>
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
          </Card>
        </Content>
      </Popout>
    </>
  ),
})
