import { HTMLStyleProps, LinkProps, Ref, StateProp, style } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import { State } from 'watch-state'

import { Flex, FlexProps } from '../Flex'
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
  children?: any
  menu?: NavigationMenu
  access?: StateProp<boolean>
}

export interface NavigationItemsProps extends HTMLStyleProps {

}

export interface NavigationProps extends FlexProps {
  menu?: NavigationMenu
}

function NavigationItem ({
  children = useChildren(),
  menu,
  access = true,
  ...props
}: NavigationItemProps = {}) {
  const styles = useItemStyles()

  return (
    <show state={access}>
      <a {...props} class={styles}>{children}</a>
      {menu && (
        <NavigationItems>
          {menu.map(item => (
            <NavigationItem {...item} />
          ))}
        </NavigationItems>
      )}
    </show>
  )
}

function * NavigationItems (props: NavigationItemsProps) {
  const children = useChildren()
  const styles = useSubMenuStyles()
  const el = props?.ref || new Ref<any>()
  const height = new State(0)

  yield (
    <section
      {...props}
      ref={el}
      style={{
        ...props?.style,
        '--ui-sub-menu-height': () => `${height.value}px`,
      }}
      class={() => styles.root}>
      {children}
    </section>
  )

  setTimeout(() => {
    height.value = el.value.scrollHeight
  })
}

export function Navigation ({
  menu,
  ...props
}: NavigationProps = {}) {
  const children = useChildren()
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
