import { Component } from 'src/app/Component'
import { DelayPage, Markdown, Typography } from 'src/ui'

import description from './README.md'

export function ContentPage () {
  return (
    <router>
      <slot name='/'>
        <DelayPage>
          <Typography>
            <Markdown text={description} />
          </Typography>
        </DelayPage>
      </slot>
      <slot name='spin'>
        <DelayPage>
          <Component is={() => import('src/ui/content/Spin/Spin.ui')} />
        </DelayPage>
      </slot>
      <slot name='spin-box'>
        <DelayPage>
          <Component is={() => import('src/ui/content/SpinBox/SpinBox.ui')} />
        </DelayPage>
      </slot>
    </router>
  )
}
