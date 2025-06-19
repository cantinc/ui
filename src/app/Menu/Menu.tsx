import { hideLayoutMenu } from 'src/core'
import { Navigation, type NavigationMenu } from 'src/ui'

const prefix = process.env.CANTINC_UI_BASE_URL ?? ''

const menu: NavigationMenu = [
  {
    exact: true,
    href: prefix || '/',
    children: 'Home',
    onclick: hideLayoutMenu,
  },
  {
    href: prefix + '/typography',
    children: 'Typography',
    menu: [
      {
        href: prefix + '/typography/markdown',
        children: '<Markdown />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/typography/typography',
        children: '<Typography />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/typography/divider',
        children: '<Divider />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/typography/title',
        children: '<Title />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/typography/section',
        children: '<Section />',
        onclick: hideLayoutMenu,
      },
    ],
  },
  {
    href: prefix + '/icons',
    children: 'Icons',
    menu: [
      {
        href: prefix + '/icons/icon',
        children: '<Icon />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/icons/arrow',
        children: '<Arrow />',
        onclick: hideLayoutMenu,
      },
    ],
  },
  {
    href: prefix + '/layout',
    children: 'Layout',
    menu: [
      {
        href: prefix + '/layout/layout',
        children: '<Layout />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/layout/flex',
        children: '<Flex />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/layout/space',
        children: '<Space />',
        onclick: hideLayoutMenu,
      },
      {
        exact: true,
        href: prefix + '/layout/spin',
        children: '<Spin />',
        onclick: hideLayoutMenu,
      },
      {
        exact: true,
        href: prefix + '/layout/async-spin',
        children: '<AsyncSpin />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/layout/spin-box',
        children: '<SpinBox />',
        onclick: hideLayoutMenu,
      },
      {
        exact: false,
        href: prefix + '/layout/navigation',
        children: '<Navigation />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/layout/details',
        children: '<Details />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/layout/image',
        children: '<Image />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/layout/pages',
        children: '<Pages />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/layout/badge-footer',
        children: '<BadgeFooter />',
        onclick: hideLayoutMenu,
      },
    ],
  },
  {
    href: prefix + '/popups',
    children: 'Popups',
    menu: [
      {
        href: prefix + '/popups/notifications',
        children: '<Notifications />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/popups/alert',
        children: '<Alert />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/popups/modals',
        children: '<Modals />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/popups/drawers',
        children: '<Drawers />',
        onclick: hideLayoutMenu,
      },
      {
        exact: true,
        href: prefix + '/popups/dropdown',
        children: '<Dropdown />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/popups/dropdown-menu',
        children: '<DropdownMenu />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/popups/popout',
        children: '<Popout />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/popups/date-picker',
        children: '<DatePicker />',
        onclick: hideLayoutMenu,
      },
    ],
  },
  {
    href: prefix + '/buttons',
    children: 'Buttons',
    menu: [
      {
        href: prefix + '/buttons/button',
        children: '<Button />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/buttons/burger',
        children: '<BurgerButton />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/buttons/close',
        children: '<CloseButton />',
        onclick: hideLayoutMenu,
      },
    ],
  },
  {
    href: prefix + '/cards',
    children: 'Cards',
    menu: [
      {
        exact: true,
        href: prefix + '/cards/card',
        children: '<Card />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/cards/cards',
        children: '<Cards />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/cards/flex',
        children: '<CardsFlex />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/cards/flip',
        children: '<FlipCard />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/cards/hover-card',
        children: '<HoverCard />',
        onclick: hideLayoutMenu,
      },
    ],
  },
  {
    href: prefix + '/interaction',
    children: 'Interaction',
    menu: [
      {
        href: prefix + '/interaction/checkbox',
        children: '<Checkbox />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/interaction/radiobox',
        children: '<Radiobox />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/interaction/tag',
        exact: true,
        children: '<Tag />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/interaction/tags',
        children: '<Tags />',
        onclick: hideLayoutMenu,
      },
      {
        exact: true,
        href: prefix + '/interaction/toggle',
        children: '<Toggle />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/interaction/toggle-bar',
        children: '<ToggleBar />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/interaction/input',
        exact: true,
        children: '<Input />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/interaction/input-mask',
        children: '<InputMask />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/interaction/input-date',
        children: '<InputDate />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/interaction/input-number',
        children: '<InputNumber />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/interaction/textarea',
        children: '<TextArea />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/interaction/selector',
        children: '<Selector />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/interaction/upload',
        children: '<Upload />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/interaction/set',
        children: '<Set />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/interaction/dots',
        children: '<Dots />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/interaction/slides',
        children: '<Slides />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/interaction/stories',
        children: '<Stories />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/interaction/calendar',
        exact: true,
        children: '<Calendar />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/interaction/calendar-title',
        children: '<CalendarTitle />',
        onclick: hideLayoutMenu,
      },
    ],
  },
  {
    href: prefix + '/info',
    children: 'Info',
    menu: [
      {
        href: prefix + '/info/progress',
        children: '<Progress />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/info/field',
        children: '<InfoField />',
        onclick: hideLayoutMenu,
      },
    ],
  },
  {
    href: prefix + '/forms',
    children: 'Forms',
    menu: [
      {
        href: prefix + '/forms/form',
        children: '<Form />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/forms/hidden',
        children: '<FormHidden />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/forms/toggle',
        children: '<FormToggle />',
        onclick: hideLayoutMenu,
      },
      {
        exact: true,
        href: prefix + '/forms/checkbox',
        children: '<FormCheckbox />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/forms/radiobox',
        children: '<FormRadiobox />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/forms/input',
        exact: true,
        children: '<FormInput />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/forms/input-mask',
        children: '<FormInputMask />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/forms/input-number',
        children: '<FormInputNumber />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/forms/input-date',
        children: '<FormInputDate />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/forms/textarea',
        children: '<FormTextArea />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/forms/selector',
        children: '<FormSelector />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/forms/set',
        children: '<FormSet />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/forms/upload',
        children: '<FormUpload />',
        onclick: hideLayoutMenu,
      },
    ],
  },
  {
    href: prefix + '/search',
    children: 'Search',
    menu: [
      {
        exact: true,
        href: prefix + '/search/toggle',
        children: '<SearchToggle />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/search/toggle-bar',
        children: '<SearchToggleBar />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/search/input',
        exact: true,
        children: '<SearchInput />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/search/input-mask',
        children: '<SearchInputMask />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/search/input-date',
        children: '<SearchInputDate />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/search/input-number',
        children: '<SearchInputNumber />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/search/selector',
        children: '<SearchSelector />',
        onclick: hideLayoutMenu,
      },
      {
        href: prefix + '/search/tags',
        children: '<SearchTags />',
        onclick: hideLayoutMenu,
      },
    ],
  },

]

export function Menu () {
  return (
    <Navigation menu={menu} />
  )
}
