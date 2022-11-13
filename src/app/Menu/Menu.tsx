import { Space } from 'src/components'

import styles from './Menu.scss'

const linkClass = {
  root: styles.link,
  active: styles.linkActive,
}

export function Menu () {
  return (
    <nav class={styles.root}>
      <a href='/'>Home</a>
      <section>
        <a class={linkClass} href='/typography'>Typography</a>
        <a class={linkClass} href='/typography/Markdown'>Markdown</a>
      </section>
      <section>
        <a class={linkClass} href='/buttons'>Buttons</a>
        <a class={linkClass} href='/buttons/Button'>Button</a>
      </section>
      <Space />
      <span>
        {process.env.CANTINC_UI_PACKAGE_VERSION}
      </span>
    </nav>
  )
}
