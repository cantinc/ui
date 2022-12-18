import { example } from 'src/app/Component'
import { Navigation } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import { Navigation } from '@cantinc/ui'

return (
  <Navigation>
    <Navigation.Item exact href='/'>
      Home
    </Navigation.Item>
    <Navigation.Item href='/single'>
      Single Link
    </Navigation.Item>
    <Navigation.Item href='/content'>
      Content
    </Navigation.Item>
    <Navigation.Items>
      <Navigation.Item href='/content/item1'>
        Item 1
      </Navigation.Item>
      <Navigation.Item href='/content/item2'>
        Item 2
      </Navigation.Item>
      <Navigation.Item href='/content/item3'>
        Item 3
      </Navigation.Item>
    </Navigation.Items>
    <Navigation.Item href='/settings'>
      Settings
    </Navigation.Item>
    <Navigation.Items>
      <Navigation.Item href='/settings/password'>
        Change Password
      </Navigation.Item>
      <Navigation.Item href='/settings/notifications'>
        Notifications
      </Navigation.Item>
      <Navigation.Item href='/settings/account'>
        Account
      </Navigation.Item>
    </Navigation.Items>
  </Navigation>
)`,
  example: (
    <Navigation>
      <Navigation.Item exact href='/content/navigation'>
        Home
      </Navigation.Item>
      <Navigation.Item href='/content/navigation/single'>
        Single Link
      </Navigation.Item>
      <Navigation.Item href='/content/navigation/content'>
        Content
      </Navigation.Item>
      <Navigation.Items>
        <Navigation.Item href='/content/navigation/content/item1'>
          Item 1
        </Navigation.Item>
        <Navigation.Item href='/content/navigation/content/item2'>
          Item 2
        </Navigation.Item>
        <Navigation.Item href='/content/navigation/content/item3'>
          Item 3
        </Navigation.Item>
      </Navigation.Items>
      <Navigation.Item href='/content/navigation/settings'>
        Settings
      </Navigation.Item>
      <Navigation.Items>
        <Navigation.Item href='/content/navigation/settings/password'>
          Change Password
        </Navigation.Item>
        <Navigation.Item href='/content/navigation/settings/notifications'>
          Notifications
        </Navigation.Item>
        <Navigation.Item href='/content/navigation/settings/account'>
          Account
        </Navigation.Item>
      </Navigation.Items>
    </Navigation>
  ),
})
