import { Space } from 'src/ui'

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
      <section>
        <a class={linkClass} href='/position'>Position</a>
        <a class={linkClass} href='/position/flex'>Flex</a>
        <a class={linkClass} href='/position/space'>Space</a>
      </section>
      <Space />
      <span>
        {process.env.CANTINC_UI_PACKAGE_VERSION}
      </span>
    </nav>
  )
}
