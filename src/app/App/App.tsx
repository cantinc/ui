import { Component } from 'src/app/Component'
import { Layout } from 'src/app/Layout'
import { Markdown } from 'src/components'

import buttonsReadme from '../../components/buttons/README.md'
import positionReadme from '../../components/position/README.md'
import typographyReadme from '../../components/typography/README.md'
import mainReadme from '../../README.md'

export function App () {
  return (
    <Layout>
      <router ish>
        <slot name='/'>
          <Markdown text={mainReadme} />
        </slot>
        <slot name='typography'>
          <router>
            <slot name='/'>
              <Markdown text={typographyReadme} />
            </slot>
            <slot name='markdown'>
              <Component is={() => import('src/components/typography/Markdown/Markdown.ui')} />
            </slot>
          </router>
        </slot>
        <slot name='buttons'>
          <router>
            <slot name='/'>
              <Markdown text={buttonsReadme} />
            </slot>
            <slot name='button'>
              <Component is={() => import('src/components/buttons/Button/Button.ui')} />
            </slot>
          </router>
        </slot>
        <slot name='position'>
          <router>
            <slot name='/'>
              <Markdown text={positionReadme} />
            </slot>
            <slot name='space'>
              <Component is={() => import('src/components/position/Space/Space.ui')} />
            </slot>
          </router>
        </slot>
      </router>
    </Layout>
  )
}
