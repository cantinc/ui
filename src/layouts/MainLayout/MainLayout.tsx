import { type ChildrenProps, Link, Show } from '@innet/dom'
import { Menu } from 'src/app/Menu'
import { hideLayoutMenu, isDesktop, isMobile, showLayoutMenu, shownLayoutMenu } from 'src/core'
import { Aside, BurgerButton, Drawer, Drawers, Flex, Header, Layout, Main, Modals, Notifications, Space } from 'src/ui'

import styles from './MainLayout.scss'

export default function MainLayout ({ children }: ChildrenProps) {
  return (
    <>
      <Layout class={styles.root} gap={[0, 20]}>
        <Show when={isDesktop}>
          <Aside padding={24} class={styles.aside} vertical>
            <Menu />
            <Space />
            <Flex padding={24} class={styles.version} justify='center'>
              v{process.env.CANTINC_UI_VERSION}
            </Flex>
          </Aside>
        </Show>
        <Show when={isMobile}>
          <Header class={styles.header}>
            <BurgerButton onclick={showLayoutMenu} />
            <Space />
            <Link href='/'>CANT inc. UI</Link>
            <Space />
          </Header>
        </Show>
        <Main padding={32} class={styles.content}>
          {children}
        </Main>
      </Layout>
      <Notifications />
      <Drawers>
        <Show when={shownLayoutMenu}>
          <Drawer vertical align='stretch' padding={16} onclose={hideLayoutMenu}>
            <Menu />
            <Space />
            <Flex justify='center'>
              v{process.env.CANTINC_UI_VERSION}
            </Flex>
          </Drawer>
        </Show>
      </Drawers>
      <Modals main />
    </>
  )
}
