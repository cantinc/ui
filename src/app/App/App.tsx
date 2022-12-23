import { navigation } from 'src/constants'
import { Aside, Flex, Layout, Main, Notifications, Pages, Space } from 'src/ui'

import styles from './App.scss'

export function App () {
  return (
    <Pages navigation={navigation}>
      <Layout gap={20} padding={[20, 20, 0]}>
        <Aside class={styles.aside} vertical>
          <slot name='menu' />
          <Space />
          <Flex justify='center'>
            v{process.env.CANTINC_UI_VERSION}
          </Flex>
        </Aside>
        <Main padding={32} class={styles.content}>
          <slot name='pages' />
        </Main>
      </Layout>
      <Notifications />
    </Pages>
  )
}
