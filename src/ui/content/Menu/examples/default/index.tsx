import { example } from 'src/app/Component'
import { Menu } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  components: {
    [Menu.Item.name]: 'Menu.Item',
    [Menu.SubMenu.name]: 'Menu.SubMenu',
  },
  example: (
    <Menu>
      <Menu.Item exact href='/content/menu'>
        Home
      </Menu.Item>
      <Menu.Item href='/content/menu/settings'>
        Settings
      </Menu.Item>
      <Menu.SubMenu>
        <Menu.Item href='/content/menu/settings/password'>
          Change Password
        </Menu.Item>
        <Menu.Item href='/content/menu/settings/notifications'>
          Notifications
        </Menu.Item>
        <Menu.Item href='/content/menu/settings/info'>
          Info
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  ),
})
