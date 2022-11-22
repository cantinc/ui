import { HTMLProps, LinkProps, Ref, Style, style, use } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import { State } from 'watch-state'

import styles from './Menu.scss'

const useStyles = style({
  root: styles.root,
})
const useItemStyles = style({
  root: styles.link,
  active: styles.linkActive,
})
const useSubMenuStyles = style({
  root: styles.submenu,
})

export interface MenuItemProps extends LinkProps {

}

export interface SubMenuProps extends HTMLProps, Style {

}

function Item (props: MenuItemProps) {
  const children = useChildren()
  const styles = useItemStyles()

  return <a {...props} class={styles}>{children}</a>
}

function * SubMenu (props: SubMenuProps) {
  const children = useChildren()
  const styles = useSubMenuStyles()
  const el = props?.ref || new Ref<any>()
  const height = new State(0)

  yield (
    <section
      {...props}
      ref={el}
      style={() => `--ui-sub-menu-height:${height.value}px;${use(props?.style) || ''}`}
      class={styles.root}>
      {children}
    </section>
  )

  height.value = el.value.scrollHeight
}

export function Menu () {
  const children = useChildren()
  const styles = useStyles()

  return (
    <nav class={styles.root}>
      {children}
    </nav>
  )
}

Menu.Item = Item
Menu.SubMenu = SubMenu
