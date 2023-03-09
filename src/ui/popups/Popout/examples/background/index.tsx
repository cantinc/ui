import { Ref } from '@innet/dom'
import { example } from 'src/app/Component'
import { Button, Card, Content, Icon, Image, Popout, Typography } from 'src/ui'
import { State } from 'watch-state'

import bg1 from './bg1.webp'
import bg2 from './bg2.webp'
import description from './README.md'

const ref = new Ref<HTMLElement>()
const state = new State(false)

const show = () => {
  state.value = true
}
const hide = () => {
  state.value = false
}

export default example({
  id: 'background',
  title: 'background',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import {
  Image,
  Icon,
  Popout,
  Content,
  Card,
  Typography,
  Button
} from '@cantinc/ui'

import background from './background.jpg'

const ref = new Ref<HTMLElement>()
const state = new State(false)

const show = () => {
  state.value = true
}
const hide = () => {
  state.value = false
}

innet(
  <>
    <Image
      style={{ 'user-select': 'none', cursor: 'pointer' }}
      onclick={show}
      justify='center'
      align='center'
      src={background}
      radius={70}
      ref={ref}
      size={140}>
      <Icon
        color='var(--color-100)'
        size={32}>
        13
      </Icon>
    </Image>
    <Popout
      contentStyle={{ background: 'transparent' }}
      show={state}
      element={ref}>
      <Content width={480} vertical align='stretch'>
        <Card gap={16} align='stretch' vertical flex>
          <Typography>
            <h1>DISCANT</h1>
            <p>This is a loyalty program. Count cants and get gifts.</p>
            <p>You have: 13 <Icon /></p>
          </Typography>
          <Button flex onclick={hide}>
            Cancel
          </Button>
        </Card>
      </Content>
    </Popout>
  </>,
  dom,
)`,
  example: (
    <>
      <Image
        style={{ 'user-select': 'none', cursor: 'pointer' }}
        onclick={show}
        justify='center'
        align='center'
        src={bg1}
        radius={70}
        ref={ref}
        size={140}>
        <Icon
          icon='cant'
          color='var(--color-100)'
          size={48}
        />
      </Image>
      <Popout
        background={`url("${bg2}") center / cover, url("${bg1}") center / cover`}
        show={state}
        element={ref}>
        <Content width={480} vertical align='stretch'>
          <Card gap={16} align='stretch' vertical flex>
            <Typography>
              <h1>DISCANT</h1>
              <p>This is a loyalty program. Count cants and get gifts.</p>
              <p>You have: 13 <Icon /></p>
            </Typography>
            <Button flex onclick={hide}>
              Cancel
            </Button>
          </Card>
        </Content>
      </Popout>
    </>
  ),
})
