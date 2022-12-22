import { Ref } from '@innet/dom'
import { Button, Buttons, Content, Popout, Typography } from 'src'
import { example } from 'src/app/Component'
import { State } from 'watch-state'

import description from './README.md'

const state1 = new State(false)
const button1 = new Ref<HTMLButtonElement>()
const state2 = new State(false)
const button2 = new Ref<HTMLButtonElement>()

const show1 = () => { state1.value = true }
const hide1 = () => { state1.value = false }
const show2 = () => { state2.value = true }
const hide2 = () => { state2.value = false }

export default example({
  id: 'deep',
  title: 'Deep',
  description,
  code: `import innet from 'innet'
import dom, { Ref } from '@innet/dom'
import { State } from 'watch-state'

import { Content, Button, Popout, Typography, Buttons } from '@cantinc/ui'

const state1 = new State(false)
const button1 = new Ref<HTMLButtonElement>()
const state2 = new State(false)
const button2 = new Ref<HTMLButtonElement>()

const show1 = () => { state1.value = true }
const hide1 = () => { state1.value = false }
const show2 = () => { state2.value = true }
const hide2 = () => { state2.value = false }

innet(
  <>
    <Button
      onclick={show1}
      ref={button1}>
      Click Me
    </Button>
    <Popout
      padding={16}
      show={state1}
      element={button1}>
      <Content width={480} gap={16} vertical>
        <Typography>
          <p>Do you want to see the next screen?</p>
        </Typography>
        <Buttons gap={16}>
          <Button flex view='negative' onclick={hide1}>
            No
          </Button>
          <Button ref={button2} flex view='positive' onclick={show2}>
            Yes
          </Button>
        </Buttons>
        <Popout
          padding={16}
          show={state2}
          element={button2}>
          <Content width={480} gap={16} vertical>
            <Typography>
              <p>This is the second screen</p>
            </Typography>
            <Button flex onclick={hide2}>
              Cancel
            </Button>
          </Content>
        </Popout>
      </Content>
    </Popout>
  </>,
  dom,
)`,
  example: (
    <>
      <Button
        onclick={show1}
        ref={button1}>
        Click Me
      </Button>
      <Popout
        padding={16}
        show={state1}
        element={button1}>
        <Content width={480} gap={16} vertical>
          <Typography>
            <p>Do you want to see the next screen?</p>
          </Typography>
          <Buttons gap={16}>
            <Button flex view='negative' onclick={hide1}>
              No
            </Button>
            <Button ref={button2} flex view='positive' onclick={show2}>
              Yes
            </Button>
          </Buttons>
          <Popout
            padding={16}
            show={state2}
            element={button2}>
            <Content width={480} gap={16} vertical>
              <Typography>
                <p>This is the second screen</p>
              </Typography>
              <Button flex onclick={hide2}>
                Cancel
              </Button>
            </Content>
          </Popout>
        </Content>
      </Popout>
    </>
  ),
})
