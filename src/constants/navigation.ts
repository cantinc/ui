import { NavigationMenu } from '../ui'

export const navigation: NavigationMenu = [
  {
    exact: true,
    href: '/',
    children: 'Home',
  },
  {
    href: '/typography',
    children: 'Typography',
    menu: [
      {
        href: '/typography/markdown',
        children: '<Markdown />',
      },
      {
        href: '/typography/typography',
        children: '<Typography />',
      },
      {
        href: '/typography/divider',
        children: '<Divider />',
      },
    ],
  },
  {
    href: '/icons',
    children: 'Icons',
    menu: [
      {
        href: '/icons/icon',
        children: '<Icon />',
      },
      {
        href: '/icons/arrow',
        children: '<Arrow />',
      },
    ],
  },
  {
    href: '/layout',
    children: 'Layout',
    menu: [
      {
        href: '/layout/layout',
        children: '<Layout />',
      },
      {
        href: '/layout/flex',
        children: '<Flex />',
      },
      {
        href: '/layout/space',
        children: '<Space />',
      },
      {
        exact: true,
        href: '/layout/spin',
        children: '<Spin />',
      },
      {
        href: '/layout/spin-box',
        children: '<SpinBox />',
      },
      {
        href: '/layout/navigation',
        children: '<Navigation />',
      },
      {
        href: '/layout/details',
        children: '<Details />',
      },
    ],
  },
  {
    href: '/popups',
    children: 'Popups',
    menu: [
      {
        href: '/popups/notifications',
        children: '<Notifications />',
      },
      {
        href: '/popups/modals',
        children: '<Modals />',
      },
      {
        href: '/popups/drawers',
        children: '<Drawers />',
      },
      {
        exact: true,
        href: '/popups/dropdown',
        children: '<Dropdown />',
      },
      {
        href: '/popups/dropdown-menu',
        children: '<DropdownMenu />',
      },
      {
        href: '/popups/cantent',
        children: '<Cantent />',
      },
    ],
  },
  {
    href: '/buttons',
    children: 'Buttons',
    menu: [
      {
        href: '/buttons/button',
        children: '<Button />',
      },
      {
        href: '/buttons/burger',
        children: '<BurgerButton />',
      },
    ],
  },
  {
    href: '/cards',
    children: 'Cards',
    menu: [
      {
        exact: true,
        href: '/cards/card',
        children: '<Card />',
      },
      {
        href: '/cards/cards',
        children: '<Cards />',
      },
    ],
  },
  {
    href: '/interaction',
    children: 'Interaction',
    menu: [
      {
        href: '/interaction/checkbox',
        children: '<Checkbox />',
      },
      {
        href: '/interaction/radiobox',
        children: '<Radiobox />',
      },
      {
        exact: true,
        href: '/interaction/toggle',
        children: '<Toggle />',
      },
      {
        href: '/interaction/toggle-bar',
        children: '<ToggleBar />',
      },
      {
        href: '/interaction/input',
        children: '<Input />',
      },
      {
        href: '/interaction/textarea',
        children: '<TextArea />',
      },
      {
        href: '/interaction/selector',
        children: '<Selector />',
      },
    ],
  },
  {
    href: '/forms',
    children: 'Forms',
    menu: [
      {
        href: '/forms/form',
        children: '<Form />',
      },
      {
        href: '/forms/toggle',
        children: '<FormToggle />',
      },
      {
        exact: true,
        href: '/forms/checkbox',
        children: '<FormCheckbox />',
      },
      {
        href: '/forms/radiobox',
        children: '<FormRadiobox />',
      },
      {
        href: '/forms/input',
        children: '<FormInput />',
      },
      {
        href: '/forms/textarea',
        children: '<FormTextArea />',
      },
      {
        href: '/forms/selector',
        children: '<FormSelector />',
      },
    ],
  },
  {
    href: '/search',
    children: 'Search',
    menu: [
      {
        exact: true,
        href: '/search/toggle',
        children: '<SearchToggle />',
      },
      {
        href: '/search/toggle-bar',
        children: '<SearchToggleBar />',
      },
    ],
  },
]
