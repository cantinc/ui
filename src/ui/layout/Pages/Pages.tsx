import { useChildren } from '@innet/jsx'

import { AsyncSpin } from '../../external/AsyncSpin'
import { Navigation, NavigationItemProps } from '../Navigation'
import { DelayPage } from '../Page'

export type PagesMenu = PagesItemProps[]

export interface PagesItemProps extends NavigationItemProps {
  slot: string
  page: () => Promise<{ default: Function }>
  menu?: PagesMenu
}

export interface PagesProps {
  navigation: PagesMenu
  prefix?: string
}

export function splitPagesItem (navigation: PagesMenu, hrefContext: string, parent?: any): [NavigationItemProps[], any] {
  const menu: NavigationItemProps[] = []
  const pages: any = {
    type: 'router',
    props: {
      ish: true,
    },
    children: parent ? [parent] : [],
  }

  for (let i = 0; i < navigation.length; i++) {
    const { menu: oldMenu, slot, page, ...rest } = navigation[i]
    const href = hrefContext && slot === '/' ? hrefContext : `${hrefContext}/${slot}`
    const item: NavigationItemProps = {
      ...rest,
      href,
    }

    const Page = async function * () {
      yield <AsyncSpin flex justify='center' align='center' show={300} />

      const { default: Component } = await page()

      yield <DelayPage><Component /></DelayPage>
    }

    if (oldMenu) {
      const [newMenu, subpages] = splitPagesItem(oldMenu, href, {
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
}: PagesProps) {
  const children = useChildren()

  const [menu, pages] = splitPagesItem(navigation, prefix)

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

  return (
    <slots from={slots}>
      {children}
    </slots>
  )
}
