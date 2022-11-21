import { Component } from 'src/app/Component'
import { DelayPage, Markdown, Typography } from 'src/ui'

import description from './README.md'

export function TypographyPage () {
  return (
    <router>
      <slot name='/'>
        <DelayPage>
          <Typography>
            <Markdown text={description} />
          </Typography>
        </DelayPage>
      </slot>
      <slot name='markdown'>
        <DelayPage>
          <Component is={() => import('src/ui/typography/Markdown/Markdown.ui')} />
        </DelayPage>
      </slot>
      <slot name='typography'>
        <DelayPage>
          <Component is={() => import('src/ui/typography/Typography/Typography.ui')} />
        </DelayPage>
      </slot>
    </router>
  )
}
