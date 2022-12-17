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
      <slot name='checkbox'>
        <Component is={() => import('src/ui/forms/FormCheckbox/FormCheckbox.ui')} />
      </slot>
      <slot name='toggle'>
        <Component is={() => import('src/ui/forms/FormToggle/FormToggle.ui')} />
      </slot>
      <slot name='radiobox'>
        <Component is={() => import('src/ui/forms/FormRadiobox/FormRadiobox.ui')} />
      </slot>
      <slot name='input'>
        <Component is={() => import('src/ui/forms/FormInput/FormInput.ui')} />
      </slot>
      <slot name='textarea'>
        <Component is={() => import('src/ui/forms/FormTextArea/FormTextArea.ui')} />
      </slot>
      <slot name='selector'>
        <Component is={() => import('src/ui/forms/FormSelector/FormSelector.ui')} />
      </slot>
    </router>
  )
}
