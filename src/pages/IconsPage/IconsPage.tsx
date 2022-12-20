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
        <Component is={() => import('src/ui/icons/Icon/Icon.ui')} />
      </slot>
      <slot name='arrow'>
        <Component is={() => import('src/ui/icons/Arrow/Arrow.ui')} />
      </slot>
    </router>
  )
}
