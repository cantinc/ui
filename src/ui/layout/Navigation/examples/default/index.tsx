import { example } from 'src/app/Component'
import { Navigation } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Navigation } from '@cantinc/ui'

innet(
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
  </Navigation>,
  dom,
)`,
  example: (
    <Navigation>
      <Navigation.Item exact href='/layout/navigation'>
        Home
      </Navigation.Item>
      <Navigation.Item href='/layout/navigation/single'>
        Single Link
      </Navigation.Item>
      <Navigation.Item href='/layout/navigation/content'>
        Content
      </Navigation.Item>
      <Navigation.Items>
        <Navigation.Item href='/layout/navigation/content/item1'>
          Item 1
        </Navigation.Item>
        <Navigation.Item href='/layout/navigation/content/item2'>
          Item 2
        </Navigation.Item>
        <Navigation.Item href='/layout/navigation/content/item3'>
          Item 3
        </Navigation.Item>
      </Navigation.Items>
      <Navigation.Item href='/layout/navigation/settings'>
        Settings
      </Navigation.Item>
      <Navigation.Items>
        <Navigation.Item href='/layout/navigation/settings/password'>
          Change Password
        </Navigation.Item>
        <Navigation.Item href='/layout/navigation/settings/notifications'>
          Notifications
        </Navigation.Item>
        <Navigation.Item href='/layout/navigation/settings/account'>
          Account
        </Navigation.Item>
      </Navigation.Items>
    </Navigation>
  ),
})