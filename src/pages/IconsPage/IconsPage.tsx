import { Component } from 'src/app/Component'
import { DelayPage, Markdown, Typography } from 'src/ui'

import description from './README.md'

export function IconsPage () {
  return (
    <router ish>
      <slot name='/'>
        <DelayPage>
          <Typography>
            <Markdown text={description} />
          </Typography>
        </DelayPage>
      </slot>
      <slot name='icon'>
        <Component is={() => import('src/ui/content/Icon/Icon.ui')} />
      </slot>
    </router>
  )
}
