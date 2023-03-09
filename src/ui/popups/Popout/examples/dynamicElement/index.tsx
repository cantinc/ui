import { Ref } from '@innet/dom'
import { Button, Buttons, Card, Content, Flex, Popout, Typography } from 'src'
import { example } from 'src/app/Component'
import { State } from 'watch-state'

import description from './README.md'

const state = new State(false)
const button = new Ref<HTMLButtonElement>()

const show = (e: MouseEvent) => {
  button.value = e.target as HTMLButtonElement
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

import {
  Content,
  Button,
  Popout,
  Typography,
  Buttons,
  Card,
  Flex
} from '@cantinc/ui'

const state = new State(false)
const button = new Ref<HTMLButtonElement>()

const show = (e: MouseEvent) => {
  button.value = e.target as HTMLButtonElement
  state.value = true
}
const hide = () => {
  state.value = false
}

innet(
  <Flex wrap gap={16}>
    <Button
      view='negative'
      onclick={show}>
      Click Me
    </Button>
    <Button
      view='positive'
      onclick={show}>
      Click Me
    </Button>
    <Popout
      padding={16}
      show={state}
      element={button}>
      <Content width={480}>
        <Card preventAnimation vertical align='stretch' gap={16}>
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
  </Flex>,
  dom,
)`,
  example: (
    <Flex wrap gap={16}>
      <Button
        view='negative'
        onclick={show}>
        Click Me
      </Button>
      <Button
        view='positive'
        onclick={show}>
        Click Me
      </Button>
      <Popout
        padding={16}
        show={state}
        element={button}>
        <Content width={480}>
          <Card preventAnimation vertical align='stretch' gap={16}>
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
    </Flex>
  ),
})
