import { Component } from 'src/app/Component'
import { DelayPage, Markdown, Typography } from 'src/ui'

import description from './README.md'

export function CardsPage () {
  return (
    <router>
      <slot name='/'>
        <DelayPage>
          <Typography>
            <Markdown text={description} />
          </Typography>
        </DelayPage>
      </slot>
      <slot name='card'>
        <Component is={() => import('src/ui/cards/Card/Card.ui')} />
      </slot>
      <slot name='cards'>
        <Component is={() => import('src/ui/cards/Cards/Cards.ui')} />
      </slot>
    </router>
  )
}
