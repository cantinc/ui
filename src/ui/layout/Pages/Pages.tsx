import { inject, routerContext } from '@innet/dom'
import { Context, useChildren } from '@innet/jsx'

import { AsyncSpin } from '../AsyncSpin'
import { Navigation, type NavigationItemProps } from '../Navigation'
import { DelayPage } from '../Page'

export type PagesMenu = PagesItemProps[]
export type PageAccessHandler = (nav: PagesItemProps) => any

export interface PagesItemProps extends NavigationItemProps {
  slot: string
  page: () => Promise<{ default: Function, [key: string]: any }>
  menu?: PagesMenu
}

export interface PagesProps {
  navigation: PagesMenu
  prefix?: string
  handleAccess?: PageAccessHandler
  title?: string
  titleSeparator?: string
}

export const titleContext = new Context<string>()
export const titleSeparatorContext = new Context<string>(' | ')

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
    const { menu: oldMenu, slot, page, access = true, ...rest } = navItem
    const href = prefix && slot === '/' ? prefix : `${prefix}/${slot === '/' ? '' : slot}`
    const item: NavigationItemProps = {
      ...rest,
      access,
      href,
    }

    const Page = async function * () {
      yield <AsyncSpin flex justify='center' align='center' showDelay={300} />

      const { default: Component, ...props } = await page()

      yield (
        <DelayPage>
          {inject(access, condition => condition ? (<Component {...props} />) : handleAccess?.(navItem))}
        </DelayPage>
      )
    }

    if (oldMenu) {
      const [newMenu, subpages] = splitPagesItem(oldMenu, href, handleAccess, {
        type: 'slot',
        props: { name: '/' },
        children: [<Page />],
      })

      if (newMenu.length) {
        item.menu = newMenu
      }

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

    if (slot) {
      menu.push(item)
    }
  }

  return [menu, pages]
}

export function Pages ({
  navigation,
  prefix = '',
  title,
  titleSeparator = ' | ',
  handleAccess,
}: PagesProps) {
  const children = useChildren()

  if (title) {
    document.title = title
  }

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

  const result = prefix
    ? (
      <slots from={slots}>
        <context for={routerContext} set={(prefix.match(/\//g) || []).length + 1}>
          {children}
        </context>
      </slots>
      )
    : (
      <slots from={slots}>
        {children}
      </slots>
      )

  return (
    <context for={titleContext} set={title}>
      <context for={titleSeparatorContext} set={titleSeparator}>
        {result}
      </context>
    </context>
  )
}
