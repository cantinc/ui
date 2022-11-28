import { Component } from 'src/app/Component'
import { DelayPage, Markdown, Typography } from 'src/ui'

import description from './README.md'

export function FormsPage () {
  return (
    <router>
      <slot name='/'>
        <DelayPage>
          <Typography>
            <Markdown text={description} />
          </Typography>
        </DelayPage>
      </slot>
      <slot name='form'>
        <Component is={() => import('src/ui/forms/Form/Form.ui')} />
      </slot>
      <slot name='toggle'>
        <Component is={() => import('src/ui/forms/FormToggle/FormToggle.ui')} />
      </slot>
    </router>
  )
}
