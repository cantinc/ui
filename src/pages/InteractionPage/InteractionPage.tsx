import { Component } from 'src/app/Component'
import { DelayPage, Markdown, Typography } from 'src/ui'

import description from './README.md'

export function InteractionPage () {
  return (
    <router>
      <slot name='/'>
        <DelayPage>
          <Typography>
            <Markdown text={description} />
          </Typography>
        </DelayPage>
      </slot>
      <slot name='toggle'>
        <Component is={() => import('src/ui/interaction/Toggle/Toggle.ui')} />
      </slot>
      <slot name='toggle-bar'>
        <Component is={() => import('src/ui/interaction/ToggleBar/ToggleBar.ui')} />
      </slot>
      <slot name='input'>
        <Component is={() => import('src/ui/interaction/Input/Input.ui')} />
      </slot>
      <slot name='textarea'>
        <Component is={() => import('src/ui/interaction/TextArea/TextArea.ui')} />
      </slot>
    </router>
  )
}
