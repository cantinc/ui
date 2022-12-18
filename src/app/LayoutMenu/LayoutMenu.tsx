import { useChildren } from '@innet/jsx'
import { Flex, Navigation, Space } from 'src/ui'

function Title () {
  const children = useChildren()

  return ['<', children, ' />']
}

export function LayoutMenu () {
  return (
    <Navigation>
      <Navigation.Item exact href='/'>
        Home
      </Navigation.Item>
      <Navigation.Item href='/typography'>
        Typography
      </Navigation.Item>
      <Navigation.Items>
        <Navigation.Item href='/typography/markdown'>
          <Title>Markdown</Title>
        </Navigation.Item>
        <Navigation.Item href='/typography/typography'>
          <Title>Typography</Title>
        </Navigation.Item>
      </Navigation.Items>
      <Navigation.Item href='/layout'>
        Layout
      </Navigation.Item>
      <Navigation.Items>
        <Navigation.Item href='/layout/layout'>
          <Title>Layout</Title>
        </Navigation.Item>
        <Navigation.Item href='/layout/flex'>
          <Title>Flex</Title>
        </Navigation.Item>
        <Navigation.Item href='/layout/space'>
          <Title>Space</Title>
        </Navigation.Item>
      </Navigation.Items>
      <Navigation.Item href='/popups'>Popups</Navigation.Item>
      <Navigation.Items>
        <Navigation.Item href='/popups/notifications'>
          <Title>Notifications</Title>
        </Navigation.Item>
        <Navigation.Item href='/popups/modals'>
          <Title>Modals</Title>
        </Navigation.Item>
        <Navigation.Item href='/popups/drawers'>
          <Title>Drawers</Title>
        </Navigation.Item>
        <Navigation.Item href='/popups/dropdown'>
          <Title>Dropdown</Title>
        </Navigation.Item>
      </Navigation.Items>
      <Navigation.Item href='/buttons'>Buttons</Navigation.Item>
      <Navigation.Items>
        <Navigation.Item href='/buttons/button'>
          <Title>Button</Title>
        </Navigation.Item>
        <Navigation.Item href='/buttons/burger'>
          <Title>BurgerButton</Title>
        </Navigation.Item>
      </Navigation.Items>
      <Navigation.Item href='/cards'>Cards</Navigation.Item>
      <Navigation.Items>
        <Navigation.Item exact href='/cards/card'>
          <Title>Card</Title>
        </Navigation.Item>
        <Navigation.Item href='/cards/cards'>
          <Title>Cards</Title>
        </Navigation.Item>
      </Navigation.Items>
      <Navigation.Item href='/interaction'>Interaction</Navigation.Item>
      <Navigation.Items>
        <Navigation.Item exact href='/interaction/checkbox'>
          <Title>Checkbox</Title>
        </Navigation.Item>
        <Navigation.Item exact href='/interaction/radiobox'>
          <Title>Radiobox</Title>
        </Navigation.Item>
        <Navigation.Item exact href='/interaction/toggle'>
          <Title>Toggle</Title>
        </Navigation.Item>
        <Navigation.Item href='/interaction/toggle-bar'>
          <Title>ToggleBar</Title>
        </Navigation.Item>
        <Navigation.Item href='/interaction/input'>
          <Title>Input</Title>
        </Navigation.Item>
        <Navigation.Item href='/interaction/textarea'>
          <Title>TextArea</Title>
        </Navigation.Item>
        <Navigation.Item href='/interaction/selector'>
          <Title>Selector</Title>
        </Navigation.Item>
      </Navigation.Items>
      <Navigation.Item href='/forms'>Forms</Navigation.Item>
      <Navigation.Items>
        <Navigation.Item exact href='/forms/form'>
          <Title>Form</Title>
        </Navigation.Item>
        <Navigation.Item exact href='/forms/toggle'>
          <Title>FormToggle</Title>
        </Navigation.Item>
        <Navigation.Item exact href='/forms/checkbox'>
          <Title>FormCheckbox</Title>
        </Navigation.Item>
        <Navigation.Item exact href='/forms/radiobox'>
          <Title>FormRadiobox</Title>
        </Navigation.Item>
        <Navigation.Item exact href='/forms/input'>
          <Title>FormInput</Title>
        </Navigation.Item>
        <Navigation.Item exact href='/forms/textarea'>
          <Title>FormTextArea</Title>
        </Navigation.Item>
        <Navigation.Item exact href='/forms/selector'>
          <Title>FormSelector</Title>
        </Navigation.Item>
      </Navigation.Items>
      <Navigation.Item href='/search'>Search</Navigation.Item>
      <Navigation.Items>
        <Navigation.Item exact href='/search/toggle'>
          <Title>SearchToggle</Title>
        </Navigation.Item>
        <Navigation.Item href='/search/toggle-bar'>
          <Title>SearchToggleBar</Title>
        </Navigation.Item>
      </Navigation.Items>
      <Navigation.Item href='/content'>Content</Navigation.Item>
      <Navigation.Items>
        <Navigation.Item href='/content/icon'>
          <Title>Icon</Title>
        </Navigation.Item>
        <Navigation.Item href='/content/divider'>
          <Title>Divider</Title>
        </Navigation.Item>
        <Navigation.Item exact href='/content/spin'>
          <Title>Spin</Title>
        </Navigation.Item>
        <Navigation.Item href='/content/spin-box'>
          <Title>SpinBox</Title>
        </Navigation.Item>
        <Navigation.Item href='/content/navigation'>
          <Title>Navigation</Title>
        </Navigation.Item>
      </Navigation.Items>
      <Space />
      <Flex justify='center'>
        v{process.env.CANTINC_UI_VERSION}
      </Flex>
    </Navigation>
  )
}
