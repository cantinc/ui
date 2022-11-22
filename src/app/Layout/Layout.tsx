import { useChildren } from '@innet/jsx'
import { LayoutMenu } from 'src/app/LayoutMenu'

import styles from './Layout.scss'

export function Layout () {
  const children = useChildren()

  return (
    <main class={styles.root}>
      <aside class={styles.aside}>
        <LayoutMenu />
      </aside>
      <article class={styles.content}>
        {children}
      </article>
    </main>
  )
}
