import {
  Aside,
  BurgerButton,
  Drawer,
  Drawers,
  Flex,
  Header,
  Layout,
  Main,
  Modals,
  Notifications,
  Pages,
  Space,
} from 'src'
import { navigation } from 'src/constants'
import { hideLayoutMenu, isDesktop, isMobile, showLayoutMenu, shownLayoutMenu } from 'src/core'

import styles from './App.scss'

export function App () {
  return (
    <Pages title='@cantinc/ui' prefix={process.env.CANTINC_UI_BASE_URL} navigation={navigation}>
      <Layout class={styles.root} gap={[0, 20]}>
        <show state={isDesktop}>
          <Aside padding={24} class={styles.aside} vertical>
            <slot name='menu' />
            <Space />
            <Flex padding={24} class={styles.version} justify='center'>
              v{process.env.CANTINC_UI_VERSION}
            </Flex>
          </Aside>
        </show>
        <show state={isMobile}>
          <Header class={styles.header}>
            <BurgerButton onclick={showLayoutMenu} />
            <Space />
            <a href='/'>CANT inc. UI</a>
            <Space />
          </Header>
        </show>
        <Main padding={32} class={styles.content}>
          <slot name='pages' />
        </Main>
      </Layout>
      <Notifications />
      <Drawers>
        <show state={shownLayoutMenu}>
          <Drawer vertical align='stretch' padding={16} onclose={hideLayoutMenu}>
            <slot name='menu' />
            <Space />
            <Flex justify='center'>
              v{process.env.CANTINC_UI_VERSION}
            </Flex>
          </Drawer>
        </show>
      </Drawers>
      <Modals main />
    </Pages>
  )
}
