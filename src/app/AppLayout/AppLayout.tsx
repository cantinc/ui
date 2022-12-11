import { useChildren } from '@innet/jsx'
import { LayoutMenu } from 'src/app/LayoutMenu'
import { Layout } from 'src/ui'

import styles from './AppLayout.scss'

export function AppLayout () {
  const children = useChildren()

  return (
    <Layout class={styles.root}>
      <aside class={styles.aside}>
        <LayoutMenu />
      </aside>
      <article class={styles.content}>
        {children}
      </article>
    </Layout>
  )
}
