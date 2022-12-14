import { Component } from 'src/app/Component'
import { DelayPage, Markdown, Typography } from 'src/ui'

import description from './README.md'

export function SearchPage () {
  return (
    <router ish>
      <slot name='/'>
        <DelayPage>
          <Typography>
            <Markdown text={description} />
          </Typography>
        </DelayPage>
      </slot>
      <slot name='toggle-bar'>
        <Component is={() => import('src/ui/search/SearchToggleBar/SearchToggleBar.ui')} />
      </slot>
    </router>
  )
}
