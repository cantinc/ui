import { example } from 'src/app/Component'
import { Navigation } from 'src/ui'

import description from './README.md'

const getURL = (url: string) => `${process.env.CANTINC_UI_BASE_URL}/layout/navigation${url}`

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
      <Navigation.Item exact href={getURL('')}>
        Home
      </Navigation.Item>
      <Navigation.Item href={getURL('/single')}>
        Single Link
      </Navigation.Item>
      <Navigation.Item href={getURL('/content')}>
        Content
      </Navigation.Item>
      <Navigation.Items>
        <Navigation.Item href={getURL('/content/item1')}>
          Item 1
        </Navigation.Item>
        <Navigation.Item href={getURL('/content/item2')}>
          Item 2
        </Navigation.Item>
        <Navigation.Item href={getURL('/content/item3')}>
          Item 3
        </Navigation.Item>
      </Navigation.Items>
      <Navigation.Item href={getURL('/settings')}>
        Settings
      </Navigation.Item>
      <Navigation.Items>
        <Navigation.Item href={getURL('/settings/password')}>
          Change Password
        </Navigation.Item>
        <Navigation.Item href={getURL('/settings/notifications')}>
          Notifications
        </Navigation.Item>
        <Navigation.Item href={getURL('/settings/account')}>
          Account
        </Navigation.Item>
      </Navigation.Items>
    </Navigation>
  ),
})
