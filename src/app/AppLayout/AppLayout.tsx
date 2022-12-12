import { useChildren } from '@innet/jsx'
import { LayoutMenu } from 'src/app/LayoutMenu'
import { Aside, Layout, Main } from 'src/ui'

import styles from './AppLayout.scss'

export function AppLayout () {
  const children = useChildren()

  return (
    <Layout gap={20} padding={20}>
      <Aside vertical>
        <LayoutMenu />
      </Aside>
      <Main padding={32} class={styles.content}>
        {children}
      </Main>
    </Layout>
  )
}
