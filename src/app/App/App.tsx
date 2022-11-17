import { Component } from 'src/app/Component'
import { Layout } from 'src/app/Layout'
import { Markdown, Typography } from 'src/ui'

import mainReadme from '../../README.md'
import buttonsReadme from '../../ui/buttons/README.md'
import positionReadme from '../../ui/position/README.md'
import typographyReadme from '../../ui/typography/README.md'

export function App () {
  return (
    <Layout>
      <router ish>
        <slot name='/'>
          <Typography>
            <Markdown text={mainReadme} />
          </Typography>
        </slot>
        <slot name='typography'>
          <router>
            <slot name='/'>
              <Typography>
                <Markdown text={typographyReadme} />
              </Typography>
            </slot>
            <slot name='markdown'>
              <Component is={() => import('src/ui/typography/Markdown/Markdown.ui')} />
            </slot>
            <slot name='typography'>
              <Component is={() => import('src/ui/typography/Typography/Typography.ui')} />
            </slot>
          </router>
        </slot>
        <slot name='position'>
          <router>
            <slot name='/'>
              <Typography>
                <Markdown text={positionReadme} />
              </Typography>
            </slot>
            <slot name='flex'>
              <Component is={() => import('src/ui/position/Flex/Flex.ui')} />
            </slot>
            <slot name='space'>
              <Component is={() => import('src/ui/position/Space/Space.ui')} />
            </slot>
          </router>
        </slot>
        <slot name='buttons'>
          <router>
            <slot name='/'>
              <Typography>
                <Markdown text={buttonsReadme} />
              </Typography>
            </slot>
            <slot name='button'>
              <Component is={() => import('src/ui/buttons/Button/Button.ui')} />
            </slot>
          </router>
        </slot>
      </router>
    </Layout>
  )
}
