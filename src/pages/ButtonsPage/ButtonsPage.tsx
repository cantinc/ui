import { Component } from 'src/app/Component'
import { DelayPage, Markdown, Typography } from 'src/ui'

import description from './README.md'

export function ButtonsPage () {
  return (
    <router>
      <slot name='/'>
        <DelayPage>
          <Typography>
            <Markdown text={description} />
          </Typography>
        </DelayPage>
      </slot>
      <slot name='button'>
        <DelayPage>
          <Component is={() => import('src/ui/buttons/Button/Button.ui')} />
        </DelayPage>
      </slot>
    </router>
  )
}
