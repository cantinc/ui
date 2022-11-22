import { Flex, Space } from 'src/ui'

import styles from './Menu.scss'

const linkClass = {
  root: styles.link,
  active: styles.linkActive,
}

export function Menu () {
  return (
    <nav class={styles.root}>
      <a class={linkClass} exact href='/'>Home</a>
      <a class={linkClass} href='/typography'>Typography</a>
      <section class={styles.submenu}>
        <a class={linkClass} href='/typography/markdown'>Markdown</a>
        <a class={linkClass} href='/typography/typography'>Typography</a>
      </section>
      <a class={linkClass} href='/position'>Position</a>
      <section class={styles.submenu}>
        <a class={linkClass} href='/position/flex'>Flex</a>
        <a class={linkClass} href='/position/space'>Space</a>
      </section>
      <a class={linkClass} href='/buttons'>Buttons</a>
      <section class={styles.submenu}>
        <a class={linkClass} href='/buttons/button'>Button</a>
      </section>
      <a class={linkClass} href='/content'>Content</a>
      <section class={styles.submenu}>
        <a class={linkClass} exact href='/content/spin'>Spin</a>
        <a class={linkClass} href='/content/spin-box'>SpinBox</a>
      </section>
      <Space />
      <Flex justify='center'>
        v{process.env.CANTINC_UI_VERSION}
      </Flex>
    </nav>
  )
}
