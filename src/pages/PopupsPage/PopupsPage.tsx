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
    </router>
  )
}
