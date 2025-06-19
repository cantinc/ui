import { type HTMLStyleProps, Link, type LinkProps, onMounted, Ref, Show, type StateProp, style } from '@innet/dom'
import { State } from 'watch-state'

import { Flex, type FlexProps } from '../Flex'
import styles from './Navigation.scss'

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

export type NavigationMenu = NavigationItemProps[]

export interface NavigationItemProps extends LinkProps {
  menu?: NavigationMenu
  access?: StateProp<boolean>
}

export interface NavigationItemsProps extends HTMLStyleProps {

}

export interface NavigationProps extends FlexProps {
  menu?: NavigationMenu
}

function NavigationItem ({
  children,
  menu,
  access = true,
  ...props
}: NavigationItemProps = {}) {
  const styles = useItemStyles()

  return (
    <Show when={access}>
      <Link {...props} class={styles}>{children}</Link>
      {menu && (
        <NavigationItems>
          {menu.map(item => (
            <NavigationItem {...item} />
          ))}
        </NavigationItems>
      )}
    </Show>
  )
}

function NavigationItems (props: NavigationItemsProps) {
  const styles = useSubMenuStyles()
  const el = props?.ref || new Ref<any>()
  const height = new State(0)

  onMounted(() => {
    height.value = el.value.scrollHeight
  })

  return (
    <section
      {...props}
      ref={el}
      style={{
        ...props?.style,
        '--ui-sub-menu-height': () => `${height.value}px`,
      }}
      class={() => styles.root}
    />
  )
}

export function Navigation ({ menu, children, ...props }: NavigationProps) {
  const styles = useStyles()

  return (
    <Flex
      element='nav'
      align='stretch'
      gap={32}
      {...props}
      class={() => styles.root}>
      {menu?.map(item => (
        <NavigationItem {...item} />
      ))}
      {children}
    </Flex>
  )
}

Navigation.Item = NavigationItem
Navigation.Items = NavigationItems
