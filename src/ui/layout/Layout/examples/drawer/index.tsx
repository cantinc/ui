import { example } from 'src/app/Component'
import { Browser, BurgerButton, Content, Drawer, Drawers, Footer, Header, Layout, Main, Space } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const menuState = new State(false)
const showMenu = () => {
  menuState.value = true
}
const hideMenu = () => {
  menuState.value = false
}

export default example({
  id: 'drawer',
  title: 'Drawer',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'
import { State } from 'watch-state'

import {
  Layout,
  Header,
  Main,
  Footer,
  Content,
  BurgerButton,
  Space,
  Drawers,
  Drawer,
} from '@cantinc/ui'

const menuState = new State(false)
const showMenu = () => {
  menuState.value = true
}
const hideMenu = () => {
  menuState.value = false
}

innet(
  <>
    <Layout vertical>
      <Header style={{ background: 'var(--color-70)' }}>
        <Content gap={16} padding={16} style={{ background: 'var(--color-60)' }}>
          <BurgerButton onclick={showMenu} />
          <Space />
          Header
          <Space />
        </Content>
      </Header>
      <Main vertical>
        <Content padding={16} style={{ background: 'var(--color-80)' }}>
          Main
        </Content>
      </Main>
      <Footer style={{ background: 'var(--color-90)' }}>
        <Content padding={16} style={{ background: 'var(--color-70)' }}>
          Footer
        </Content>
      </Footer>
    </Layout>
    <Drawers>
      <show state={menuState}>
        <Drawer
          padding={24}
          onclose={hideMenu}>
          Aside
        </Drawer>
      </show>
    </Drawers>
  </>,
  dom,
)`,
  example: (
    <Browser height={320}>
      <Layout vertical>
        <Header style={{ background: 'var(--color-70)' }}>
          <Content gap={16} padding={16} style={{ background: 'var(--color-60)' }}>
            <BurgerButton onclick={showMenu} />
            <Space />
            Header
            <Space />
          </Content>
        </Header>
        <Main vertical>
          <Content padding={16} style={{ background: 'var(--color-80)' }}>
            Main
          </Content>
        </Main>
        <Footer style={{ background: 'var(--color-90)' }}>
          <Content padding={16} style={{ background: 'var(--color-70)' }}>
            Footer
          </Content>
        </Footer>
      </Layout>
      <Drawers>
        <show state={menuState}>
          <Drawer
            padding={24}
            onclose={hideMenu}>
            Aside
          </Drawer>
        </show>
      </Drawers>
    </Browser>
  ),
})
