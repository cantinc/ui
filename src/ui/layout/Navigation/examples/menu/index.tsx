import { example } from 'src/app/Component'
import { Navigation, type NavigationMenu } from 'src/ui'

import description from './README.md'

const getURL = (url: string) => `${process.env.CANTINC_UI_BASE_URL}/layout/navigation${url}`

const menu: NavigationMenu = [
  {
    exact: true,
    href: getURL(''),
    children: 'Home',
  },
  {
    href: getURL('/single'),
    children: 'Single Link',
  },
  {
    href: getURL('/content'),
    children: 'Content',
    menu: [
      {
        href: getURL('/content/item1'),
        children: 'Item 1',
      },
      {
        href: getURL('/content/item2'),
        children: 'Item 2',
      },
      {
        href: getURL('/content/item3'),
        children: 'Item 3',
      },
    ],
  },
  {
    href: getURL('/settings'),
    children: 'Settings',
    menu: [
      {
        href: getURL('/settings/password'),
        children: 'Change Password',
      },
      {
        href: getURL('/settings/notifications'),
        children: 'Notifications',
      },
      {
        href: getURL('/settings/account'),
        children: 'Account',
      },
    ],
  },
]

export default example({
  id: 'menu',
  title: 'menu',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Navigation, NavigationMenu } from '@cantinc/ui'

const menu: NavigationMenu = [
  {
    exact: true,
    href: '/',
    children: 'Home',
  },
  {
    href: '/single',
    children: 'Single Link',
  },
  {
    href: '/content',
    children: 'Content',
    menu: [
      {
        href: '/content/item1',
        children: 'Item 1',
      },
      {
        href: '/content/item2',
        children: 'Item 2',
      },
      {
        href: '/content/item3',
        children: 'Item 3',
      },
    ],
  },
  {
    href: '/settings',
    children: 'Settings',
    menu: [
      {
        href: '/settings/password',
        children: 'Change Password',
      },
      {
        href: '/settings/notifications',
        children: 'Notifications',
      },
      {
        href: '/settings/account',
        children: 'Account',
      },
    ],
  },
]

innet(
  <Navigation menu={menu} />,
  dom,
)`,
  example: (
    <Navigation menu={menu} />
  ),
})
