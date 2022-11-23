import { Flex, Menu, Space } from 'src/ui'

export function LayoutMenu () {
  return (
    <Menu>
      <Menu.Item exact href='/'>Home</Menu.Item>
      <Menu.Item href='/typography'>Typography</Menu.Item>
      <Menu.SubMenu>
        <Menu.Item href='/typography/markdown'>Markdown</Menu.Item>
        <Menu.Item href='/typography/typography'>Typography</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item href='/position'>Position</Menu.Item>
      <Menu.SubMenu>
        <Menu.Item href='/position/flex'>Flex</Menu.Item>
        <Menu.Item href='/position/space'>Space</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item href='/popups'>Popups</Menu.Item>
      <Menu.SubMenu>
        <Menu.Item href='/popups/notifications'>Notifications</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item href='/buttons'>Buttons</Menu.Item>
      <Menu.SubMenu>
        <Menu.Item href='/buttons/button'>Button</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item href='/content'>Content</Menu.Item>
      <Menu.SubMenu>
        <Menu.Item href='/content/divider'>Divider</Menu.Item>
        <Menu.Item exact href='/content/spin'>Spin</Menu.Item>
        <Menu.Item href='/content/spin-box'>SpinBox</Menu.Item>
        <Menu.Item href='/content/toggle-bar'>ToggleBar</Menu.Item>
        <Menu.Item href='/content/search-toggle-bar'>SearchToggleBar</Menu.Item>
      </Menu.SubMenu>
      <Space />
      <Flex justify='center'>
        v{process.env.CANTINC_UI_VERSION}
      </Flex>
    </Menu>
  )
}
