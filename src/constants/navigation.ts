import { PagesMenu } from '../ui'

export const navigation: PagesMenu = [
  {
    exact: true,
    slot: '/',
    children: 'Home',
    page: () => import('../pages/HomePage'),
  },
  {
    slot: 'typography',
    children: 'Typography',
    page: () => import('../pages/TypographyPage'),
    menu: [
      {
        slot: 'markdown',
        children: '<Markdown />',
        page: () => import('../ui/typography/Markdown/Markdown.ui'),
      },
      {
        slot: 'typography',
        children: '<Typography />',
        page: () => import('../ui/typography/Typography/Typography.ui'),
      },
      {
        slot: 'divider',
        children: '<Divider />',
        page: () => import('../ui/typography/Divider/Divider.ui'),
      },
    ],
  },
  {
    slot: 'icons',
    children: 'Icons',
    page: () => import('../pages/IconsPage'),
    menu: [
      {
        slot: 'icon',
        children: '<Icon />',
        page: () => import('../ui/icons/Icon/Icon.ui'),
      },
      {
        slot: 'arrow',
        children: '<Arrow />',
        page: () => import('../ui/icons/Arrow/Arrow.ui'),
      },
    ],
  },
  {
    slot: 'layout',
    children: 'Layout',
    page: () => import('../pages/LayoutPage'),
    menu: [
      {
        slot: 'layout',
        children: '<Layout />',
        page: () => import('../ui/layout/Layout/Layout.ui'),
      },
      {
        slot: 'flex',
        children: '<Flex />',
        page: () => import('../ui/layout/Flex/Flex.ui'),
      },
      {
        slot: 'space',
        children: '<Space />',
        page: () => import('../ui/layout/Space/Space.ui'),
      },
      {
        exact: true,
        slot: 'spin',
        children: '<Spin />',
        page: () => import('../ui/layout/Spin/Spin.ui'),
      },
      {
        slot: 'spin-box',
        children: '<SpinBox />',
        page: () => import('../ui/layout/SpinBox/SpinBox.ui'),
      },
      {
        exact: true,
        slot: 'navigation',
        children: '<Navigation />',
        page: () => import('../ui/layout/Navigation/Navigation.ui'),
      },
      {
        slot: 'details',
        children: '<Details />',
        page: () => import('../ui/layout/Details/Details.ui'),
      },
      {
        slot: 'image',
        children: '<Image />',
        page: () => import('../ui/layout/Image/Image.ui'),
      },
      {
        slot: 'pages',
        children: '<Pages />',
        page: () => import('../ui/layout/Pages/Pages.ui'),
      },
    ],
  },
  {
    slot: 'popups',
    children: 'Popups',
    page: () => import('../pages/PopupsPage'),
    menu: [
      {
        slot: 'notifications',
        children: '<Notifications />',
        page: () => import('../ui/popups/Notifications/Notifications.ui'),
      },
      {
        slot: 'modals',
        children: '<Modals />',
        page: () => import('../ui/popups/Modals/Modals.ui'),
      },
      {
        slot: 'drawers',
        children: '<Drawers />',
        page: () => import('../ui/popups/Drawers/Drawers.ui'),
      },
      {
        exact: true,
        slot: 'dropdown',
        children: '<Dropdown />',
        page: () => import('../ui/popups/Dropdown/Dropdown.ui'),
      },
      {
        slot: 'dropdown-menu',
        children: '<DropdownMenu />',
        page: () => import('../ui/popups/DropdownMenu/DropdownMenu.ui'),
      },
      {
        slot: 'popout',
        children: '<Popout />',
        page: () => import('../ui/popups/Popout/Popout.ui'),
      },
    ],
  },
  {
    slot: 'buttons',
    children: 'Buttons',
    page: () => import('../pages/ButtonsPage'),
    menu: [
      {
        slot: 'button',
        children: '<Button />',
        page: () => import('../ui/buttons/Button/Button.ui'),
      },
      {
        slot: 'burger',
        children: '<BurgerButton />',
        page: () => import('../ui/buttons/BurgerButton/BurgerButton.ui'),
      },
    ],
  },
  {
    slot: 'cards',
    children: 'Cards',
    page: () => import('../pages/CardsPage'),
    menu: [
      {
        exact: true,
        slot: 'card',
        children: '<Card />',
        page: () => import('../ui/cards/Card/Card.ui'),
      },
      {
        slot: 'cards',
        children: '<Cards />',
        page: () => import('../ui/cards/Cards/Cards.ui'),
      },
    ],
  },
  {
    slot: 'interaction',
    children: 'Interaction',
    page: () => import('../pages/InteractionPage'),
    menu: [
      {
        slot: 'checkbox',
        children: '<Checkbox />',
        page: () => import('../ui/interaction/Checkbox/Checkbox.ui'),
      },
      {
        slot: 'radiobox',
        children: '<Radiobox />',
        page: () => import('../ui/interaction/Radiobox/Radiobox.ui'),
      },
      {
        exact: true,
        slot: 'toggle',
        children: '<Toggle />',
        page: () => import('../ui/interaction/Toggle/Toggle.ui'),
      },
      {
        slot: 'toggle-bar',
        children: '<ToggleBar />',
        page: () => import('../ui/interaction/ToggleBar/ToggleBar.ui'),
      },
      {
        slot: 'input',
        children: '<Input />',
        page: () => import('../ui/interaction/Input/Input.ui'),
      },
      {
        slot: 'textarea',
        children: '<TextArea />',
        page: () => import('../ui/interaction/TextArea/TextArea.ui'),
      },
      {
        slot: 'selector',
        children: '<Selector />',
        page: () => import('../ui/interaction/Selector/Selector.ui'),
      },
    ],
  },
  {
    slot: 'forms',
    children: 'Forms',
    page: () => import('../pages/FormsPage'),
    menu: [
      {
        slot: 'form',
        children: '<Form />',
        page: () => import('../ui/forms/Form/Form.ui'),
      },
      {
        slot: 'toggle',
        children: '<FormToggle />',
        page: () => import('../ui/forms/FormToggle/FormToggle.ui'),
      },
      {
        exact: true,
        slot: 'checkbox',
        children: '<FormCheckbox />',
        page: () => import('../ui/forms/FormCheckbox/FormCheckbox.ui'),
      },
      {
        slot: 'radiobox',
        children: '<FormRadiobox />',
        page: () => import('../ui/forms/FormRadiobox/FormRadiobox.ui'),
      },
      {
        slot: 'input',
        children: '<FormInput />',
        page: () => import('../ui/forms/FormInput/FormInput.ui'),
      },
      {
        slot: 'textarea',
        children: '<FormTextArea />',
        page: () => import('../ui/forms/FormTextArea/FormTextArea.ui'),
      },
      {
        slot: 'selector',
        children: '<FormSelector />',
        page: () => import('../ui/forms/FormSelector/FormSelector.ui'),
      },
    ],
  },
  {
    slot: 'search',
    children: 'Search',
    page: () => import('../pages/SearchPage'),
    menu: [
      {
        exact: true,
        slot: 'toggle',
        children: '<SearchToggle />',
        page: () => import('../ui/search/SearchToggle/SearchToggle.ui'),
      },
      {
        slot: 'toggle-bar',
        children: '<SearchToggleBar />',
        page: () => import('../ui/search/SearchToggleBar/SearchToggleBar.ui'),
      },
    ],
  },
]
