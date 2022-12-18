import { example } from 'src/app/Component'
import { Navigation, NavigationMenu } from 'src/ui'

import description from './README.md'

const menu: NavigationMenu = [
  {
    exact: true,
    href: '/content/navigation',
    children: 'Home',
  },
  {
    href: '/content/navigation/single',
    children: 'Single Link',
  },
  {
    href: '/content/navigation/content',
    children: 'Content',
    menu: [
      {
        href: '/content/navigation/content/item1',
        children: 'Item 1',
      },
      {
        href: '/content/navigation/content/item2',
        children: 'Item 2',
      },
      {
        href: '/content/navigation/content/item3',
        children: 'Item 3',
      },
    ],
  },
  {
    href: '/content/navigation/settings',
    children: 'Settings',
    menu: [
      {
        href: '/content/navigation/settings/password',
        children: 'Change Password',
      },
      {
        href: '/content/navigation/settings/notifications',
        children: 'Notifications',
      },
      {
        href: '/content/navigation/settings/account',
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
