import { Component } from 'src/app/Component'
import { DelayPage, Markdown, Typography } from 'src/ui'

import description from './README.md'

export function PopupsPage () {
  return (
    <router>
      <slot name='/'>
        <DelayPage>
          <Typography>
            <Markdown text={description} />
          </Typography>
        </DelayPage>
      </slot>
      <slot name='notifications'>
        <Component is={() => import('src/ui/popups/Notifications/Notifications.ui')} />
      </slot>
      <slot name='modals'>
        <Component is={() => import('src/ui/popups/Modals/Modals.ui')} />
      </slot>
      <slot name='drawers'>
        <Component is={() => import('src/ui/popups/Drawers/Drawers.ui')} />
      </slot>
      <slot name='dropdown'>
        <Component is={() => import('src/ui/popups/Dropdown/Dropdown.ui')} />
      </slot>
      <slot name='dropdown-menu'>
        <Component is={() => import('src/ui/popups/DropdownMenu/DropdownMenu.ui')} />
      </slot>
      <slot name='cantent'>
        <Component is={() => import('src/ui/popups/Cantent/Cantent.ui')} />
      </slot>
    </router>
  )
}
