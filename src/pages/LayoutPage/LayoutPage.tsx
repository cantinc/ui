import { Component } from 'src/app/Component'
import { DelayPage, Markdown, Typography } from 'src/ui'

import description from './README.md'

export function LayoutPage () {
  return (
    <router ish>
      <slot name='/'>
        <DelayPage>
          <Typography>
            <Markdown text={description} />
          </Typography>
        </DelayPage>
      </slot>
      <slot name='layout'>
        <Component is={() => import('src/ui/layout/Layout/Layout.ui')} />
      </slot>
      <slot name='pages'>
        <Component is={() => import('src/ui/layout/Pages/Pages.ui')} />
      </slot>
      <slot name='flex'>
        <Component is={() => import('src/ui/layout/Flex/Flex.ui')} />
      </slot>
      <slot name='space'>
        <Component is={() => import('src/ui/layout/Space/Space.ui')} />
      </slot>
      <slot name='spin'>
        <Component is={() => import('src/ui/layout/Spin/Spin.ui')} />
      </slot>
      <slot name='spin-box'>
        <Component is={() => import('src/ui/layout/SpinBox/SpinBox.ui')} />
      </slot>
      <slot name='navigation'>
        <Component is={() => import('src/ui/layout/Navigation/Navigation.ui')} />
      </slot>
      <slot name='details'>
        <Component is={() => import('src/ui/layout/Details/Details.ui')} />
      </slot>
      <slot name='image'>
        <Component is={() => import('src/ui/layout/Image/Image.ui')} />
      </slot>
    </router>
  )
}
