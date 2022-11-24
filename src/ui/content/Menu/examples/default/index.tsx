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
      <Menu.Item href='/content/menu/single'>
        Single Link
      </Menu.Item>
      <Menu.Item href='/content/menu/content'>
        Content
      </Menu.Item>
      <Menu.SubMenu>
        <Menu.Item href='/content/menu/content/item1'>
          Item 1
        </Menu.Item>
        <Menu.Item href='/content/menu/content/item2'>
          Item 2
        </Menu.Item>
        <Menu.Item href='/content/menu/content/item3'>
          Item 3
        </Menu.Item>
      </Menu.SubMenu>
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
        <Menu.Item href='/content/menu/settings/account'>
          Account
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  ),
})
