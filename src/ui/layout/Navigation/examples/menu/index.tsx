import { example } from 'src/app/Component'
import { Navigation, NavigationMenu } from 'src/ui'

import description from './README.md'

const menu: NavigationMenu = [
  {
    exact: true,
    href: '/layout/navigation',
    children: 'Home',
  },
  {
    href: '/layout/navigation/single',
    children: 'Single Link',
  },
  {
    href: '/layout/navigation/content',
    children: 'Content',
    menu: [
      {
        href: '/layout/navigation/content/item1',
        children: 'Item 1',
      },
      {
        href: '/layout/navigation/content/item2',
        children: 'Item 2',
      },
      {
        href: '/layout/navigation/content/item3',
        children: 'Item 3',
      },
    ],
  },
  {
    href: '/layout/navigation/settings',
    children: 'Settings',
    menu: [
      {
        href: '/layout/navigation/settings/password',
        children: 'Change Password',
      },
      {
        href: '/layout/navigation/settings/notifications',
        children: 'Notifications',
      },
      {
        href: '/layout/navigation/settings/account',
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
