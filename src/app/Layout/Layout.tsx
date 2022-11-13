import { useChildren } from '@innet/jsx'
import { Menu } from 'src/app/Menu'

import styles from './Layout.scss'

export function Layout () {
  const children = useChildren()

  return (
    <main class={styles.root}>
      <aside class={styles.aside}>
        <Menu />
      </aside>
      <article class={styles.content}>
        {children}
      </article>
    </main>
  )
}
