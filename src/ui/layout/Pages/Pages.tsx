import { inject, routerContext } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import { AsyncSpin } from '../../external/AsyncSpin'
import { Navigation, NavigationItemProps } from '../Navigation'
import { DelayPage } from '../Page'

export type PagesMenu = PagesItemProps[]
export type PageAccessHandler = (nav: PagesItemProps) => any

export interface PagesItemProps extends NavigationItemProps {
  slot: string
  page: () => Promise<{ default: Function }>
  menu?: PagesMenu
}

export interface PagesProps {
  navigation: PagesMenu
  prefix?: string
  handleAccess?: PageAccessHandler
}

export function splitPagesItem (navigation: PagesMenu, prefix: string, handleAccess?: PageAccessHandler, parent?: any): [NavigationItemProps[], any] {
  const menu: NavigationItemProps[] = []
  const pages: any = {
    type: 'router',
    props: {
      ish: true,
    },
    children: parent ? [parent] : [],
  }

  for (let i = 0; i < navigation.length; i++) {
    const navItem = navigation[i]
    const { menu: oldMenu, slot, page, condition = true, ...rest } = navItem
    const href = prefix && slot === '/' ? prefix : `${prefix}/${slot === '/' ? '' : slot}`
    const item: NavigationItemProps = {
      ...rest,
      condition,
      href,
    }

    const Page = async function * () {
      yield <AsyncSpin flex justify='center' align='center' show={300} />

      const { default: Component } = await page()

      yield <DelayPage>{inject(condition, condition => condition ? (<Component />) : handleAccess?.(navItem))}</DelayPage>
    }

    if (oldMenu) {
      const [newMenu, subpages] = splitPagesItem(oldMenu, href, handleAccess, {
        type: 'slot',
        props: { name: '/' },
        children: [<Page />],
      })

      item.menu = newMenu

      pages.children.push({
        type: 'slot',
        props: { name: slot },
        children: [subpages],
      })
    } else {
      pages.children.push({
        type: 'slot',
        props: { name: slot },
        children: [<Page />],
      })
    }

    menu.push(item)
  }

  return [menu, pages]
}

export function Pages ({
  navigation,
  prefix = '',
  handleAccess,
}: PagesProps) {
  const children = useChildren()

  const [menu, pages] = splitPagesItem(navigation, prefix, handleAccess)

  const slots = (
    <>
      <slot name='menu'>
        <Navigation menu={menu} />
      </slot>
      <slot name='pages'>
        {pages}
      </slot>
    </>
  )

  if (!prefix) {
    return (
      <slots from={slots}>
        {children}
      </slots>
    )
  }

  return (
    <slots from={slots}>
      <context for={routerContext} set={(prefix.match(/\//g) || []).length + 1}>
        {children}
      </context>
    </slots>
  )
}
