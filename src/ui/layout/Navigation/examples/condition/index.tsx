import { example } from 'src/app/Component'
import { Flex, Navigation, NavigationMenu, Toggle } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const condition = new State(false)

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
    condition,
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
        condition,
      },
      {
        href: getURL('/content/item3'),
        children: 'Item 3',
        condition,
      },
    ],
  },
  {
    href: getURL('/settings'),
    children: 'Settings',
    condition,
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
  id: 'condition',
  title: 'condition',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'
import { State } from 'watch-state'

import { Navigation, NavigationMenu, Flex, Toggle } from '@cantinc/ui'

const condition = new State(false)

const menu: NavigationMenu = [
  {
    exact: true,
    href: getURL(''),
    children: 'Home',
  },
  {
    href: getURL('/single'),
    children: 'Single Link',
    condition,
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
        condition,
      },
      {
        href: getURL('/content/item3'),
        children: 'Item 3',
        condition,
      },
    ],
  },
  {
    href: getURL('/settings'),
    children: 'Settings',
    condition,
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

innet(
  <Flex vertical gap={16}>
    <Toggle checked={condition}>
      Show all
    </Toggle>
    <Navigation menu={menu} />
  </Flex>,
  dom,
)`,
  example: (
    <Flex vertical gap={16}>
      <Toggle checked={condition}>
        Show all
      </Toggle>
      <Navigation menu={menu} />
    </Flex>
  ),
})
