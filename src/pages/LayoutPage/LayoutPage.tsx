import { Component } from 'src/app/Component'
import { DelayPage, Markdown, Typography } from 'src/ui'

import description from './README.md'

export function LayoutPage () {
  return (
    <router>
      <slot name='/'>
        <DelayPage>
          <Typography>
            <Markdown text={description} />
          </Typography>
        </DelayPage>
      </slot>
      <slot name='flex'>
        <Component is={() => import('src/ui/layout/Flex/Flex.ui')} />
      </slot>
      <slot name='space'>
        <Component is={() => import('src/ui/layout/Space/Space.ui')} />
      </slot>
    </router>
  )
}
