import { useChildren } from '@innet/jsx'
import { Flex, Menu, Space } from 'src/ui'

function Title () {
  const children = useChildren()

  return ['<', children, ' />']
}

export function LayoutMenu () {
  return (
    <Menu>
      <Menu.Item exact href='/'>
        Home
      </Menu.Item>
      <Menu.Item href='/typography'>
        Typography
      </Menu.Item>
      <Menu.SubMenu>
        <Menu.Item href='/typography/markdown'>
          <Title>Markdown</Title>
        </Menu.Item>
        <Menu.Item href='/typography/typography'>
          <Title>Typography</Title>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item href='/layout'>
        Layout
      </Menu.Item>
      <Menu.SubMenu>
        <Menu.Item href='/layout/flex'>
          <Title>Flex</Title>
        </Menu.Item>
        <Menu.Item href='/layout/space'>
          <Title>Space</Title>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item href='/popups'>Popups</Menu.Item>
      <Menu.SubMenu>
        <Menu.Item href='/popups/notifications'>
          <Title>Notifications</Title>
        </Menu.Item>
        <Menu.Item href='/popups/modals'>
          <Title>Modals</Title>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item href='/buttons'>Buttons</Menu.Item>
      <Menu.SubMenu>
        <Menu.Item href='/buttons/button'>
          <Title>Button</Title>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item href='/cards'>Cards</Menu.Item>
      <Menu.SubMenu>
        <Menu.Item exact href='/cards/card'>
          <Title>Card</Title>
        </Menu.Item>
        <Menu.Item href='/cards/cards'>
          <Title>Cards</Title>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item href='/interaction'>Interaction</Menu.Item>
      <Menu.SubMenu>
        <Menu.Item exact href='/interaction/toggle'>
          <Title>Toggle</Title>
        </Menu.Item>
        <Menu.Item href='/interaction/toggle-bar'>
          <Title>ToggleBar</Title>
        </Menu.Item>
        <Menu.Item href='/interaction/input'>
          <Title>Input</Title>
        </Menu.Item>
        <Menu.Item href='/interaction/textarea'>
          <Title>TextArea</Title>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item href='/forms'>Forms</Menu.Item>
      <Menu.SubMenu>
        <Menu.Item exact href='/forms/form'>
          <Title>Form</Title>
        </Menu.Item>
        <Menu.Item exact href='/forms/toggle'>
          <Title>FormToggle</Title>
        </Menu.Item>
        <Menu.Item exact href='/forms/input'>
          <Title>FormInput</Title>
        </Menu.Item>
        <Menu.Item exact href='/forms/textarea'>
          <Title>FormTextArea</Title>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item href='/content'>Content</Menu.Item>
      <Menu.SubMenu>
        <Menu.Item href='/content/icon'>
          <Title>Icon</Title>
        </Menu.Item>
        <Menu.Item href='/content/divider'>
          <Title>Divider</Title>
        </Menu.Item>
        <Menu.Item exact href='/content/spin'>
          <Title>Spin</Title>
        </Menu.Item>
        <Menu.Item href='/content/spin-box'>
          <Title>SpinBox</Title>
        </Menu.Item>
        <Menu.Item href='/content/search-toggle-bar'>
          <Title>SearchToggleBar</Title>
        </Menu.Item>
        <Menu.Item href='/content/menu'>
          <Title>Menu</Title>
        </Menu.Item>
      </Menu.SubMenu>
      <Space />
      <Flex justify='center'>
        v{process.env.CANTINC_UI_VERSION}
      </Flex>
    </Menu>
  )
}
