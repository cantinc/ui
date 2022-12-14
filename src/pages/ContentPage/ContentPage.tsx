import { Component } from 'src/app/Component'
import { DelayPage, Markdown, Typography } from 'src/ui'

import description from './README.md'

export function ContentPage () {
  return (
    <router ish>
      <slot name='/'>
        <DelayPage>
          <Typography>
            <Markdown text={description} />
          </Typography>
        </DelayPage>
      </slot>
      <slot name='spin'>
        <Component is={() => import('src/ui/content/Spin/Spin.ui')} />
      </slot>
      <slot name='spin-box'>
        <Component is={() => import('src/ui/content/SpinBox/SpinBox.ui')} />
      </slot>
      <slot name='divider'>
        <Component is={() => import('src/ui/content/Divider/Divider.ui')} />
      </slot>
      <slot name='menu'>
        <Component is={() => import('src/ui/content/Menu/Menu.ui')} />
      </slot>
      <slot name='icon'>
        <Component is={() => import('src/ui/content/Icon/Icon.ui')} />
      </slot>
    </router>
  )
}
