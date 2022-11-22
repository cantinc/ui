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
        <a class={linkClass} href='/typography/markdown'>Markdown</a>
        <a class={linkClass} href='/typography/typography'>Typography</a>
      </section>
      <section>
        <a class={linkClass} href='/position'>Position</a>
        <a class={linkClass} href='/position/flex'>Flex</a>
        <a class={linkClass} href='/position/space'>Space</a>
      </section>
      <section>
        <a class={linkClass} href='/buttons'>Buttons</a>
        <a class={linkClass} href='/buttons/button'>Button</a>
      </section>
      <section>
        <a class={linkClass} href='/content'>Content</a>
        <a class={linkClass} href='/content/spin'>Spin</a>
        <a class={linkClass} href='/content/spin-box'>SpinBox</a>
      </section>
      <Space />
      <span>
        {process.env.CANTINC_UI_VERSION}
      </span>
    </nav>
  )
}
