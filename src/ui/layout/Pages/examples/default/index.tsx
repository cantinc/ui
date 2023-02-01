import { example } from 'src/app/Component'
import {
  Browser,
  BurgerButton,
  Content,
  Drawer,
  Drawers,
  Footer,
  Header,
  Layout,
  Main,
  Pages,
  type PagesMenu,
  Space,
} from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const menuState = new State(false)
const showMenu = () => {
  menuState.value = true
}
const hideMenu = () => {
  menuState.value = false
}

const navigation: PagesMenu = [
  {
    slot: '/',
    exact: true,
    children: 'Home',
    onclick: hideMenu,
    scrollTo: -1,
    page: () => import('./LayoutHomePage'),
  },
  {
    slot: 'info',
    exact: true,
    children: 'Info',
    onclick: hideMenu,
    scrollTo: -1,
    page: () => import('./LayoutInfoPage'),
  },
  {
    slot: 'settings',
    children: 'Settings',
    onclick: hideMenu,
    scrollTo: -1,
    page: () => import('./LayoutSettingsPage'),
    menu: [
      {
        slot: 'personal',
        children: 'Personal',
        onclick: hideMenu,
        scrollTo: -1,
        page: () => import('./LayoutPersonalSettingsPage'),
      },
    ],
  },
]

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'
import { State } from 'watch-state'

import {
  BurgerButton,
  Content,
  Drawer,
  Drawers,
  Footer,
  Header,
  Layout,
  Main,
  Pages,
  PagesMenu,
  Space,
} from '@cantinc/ui'

const menuState = new State(false)
const showMenu = () => {
  menuState.value = true
}
const hideMenu = () => {
  menuState.value = false
}

const navigation: PagesMenu = [
  {
    slot: '/',
    exact: true,
    children: 'Home',
    onclick: hideMenu,
    page: () => import('./HomePage'),
  },
  {
    slot: 'info',
    exact: true,
    children: 'Info',
    onclick: hideMenu,
    page: () => import('./InfoPage'),
  },
  {
    slot: 'settings',
    children: 'Settings',
    onclick: hideMenu,
    page: () => import('./SettingsPage'),
    menu: [
      {
        slot: 'personal',
        children: 'Personal',
        onclick: hideMenu,
        page: () => import('./PersonalSettingsPage'),
      },
    ],
  },
]

innet(
  <Pages navigation={navigation}>
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
          <slot name='pages' />
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
          <slot name='menu' />
        </Drawer>
      </show>
    </Drawers>
  </Pages>,
  dom,
)`,
  example: (
    <Browser height={400}>
      <Pages prefix={`${process.env.CANTINC_UI_BASE_URL}/layout/pages`} navigation={navigation}>
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
              <slot name='pages' />
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
              padding={64}
              onclose={hideMenu}>
              <slot name='menu' />
            </Drawer>
          </show>
        </Drawers>
      </Pages>
    </Browser>
  ),
})
