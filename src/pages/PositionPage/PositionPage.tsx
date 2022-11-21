import { Component } from 'src/app/Component'
import { DelayPage, Markdown, Typography } from 'src/ui'

import description from './README.md'

export function PositionPage () {
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
        <DelayPage>
          <Component is={() => import('src/ui/position/Flex/Flex.ui')} />
        </DelayPage>
      </slot>
      <slot name='space'>
        <DelayPage>
          <Component is={() => import('src/ui/position/Space/Space.ui')} />
        </DelayPage>
      </slot>
    </router>
  )
}
