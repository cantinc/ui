import { Component } from 'src/app/Component'
import { DelayPage, Flex, Markdown, Typography } from 'src/ui'

import description from './README.md'

const colors = ['primary', 'secondary', 'negative', 'warning', 'positive']
const sizes = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

export function TypographyPage () {
  const props = getComputedStyle(document.documentElement)

  return (
    <router>
      <slot name='/'>
        <DelayPage>
          <Typography>
            <Markdown text={description} />
            <h2>Color theme</h2>
            <h3>Gray</h3>
            {sizes.map(size => (
              <Flex
                flex
                padding={16}
                style={`--color:var(--color-${size});background:var(--color);color:var(--color-${size > 50 ? 0 : 100})`}>
                {`--color-${size}`}: {props.getPropertyValue(`--color-${size}`)}
              </Flex>
            ))}
            {colors.map(color => (
              <>
                <h3>{color}</h3>
                {sizes.map(size => (
                  <Flex
                    flex
                    padding={16}
                    style={`--color:var(--color-${color}-${size});background:var(--color);color:var(--color-${size > 50 ? 0 : 100})`}>
                    {`--color-${color}-${size}`}: {props.getPropertyValue(`--color-${color}-${size}`)}
                  </Flex>
                ))}
              </>
            ))}
          </Typography>
        </DelayPage>
      </slot>
      <slot name='markdown'>
        <Component is={() => import('src/ui/typography/Markdown/Markdown.ui')} />
      </slot>
      <slot name='typography'>
        <Component is={() => import('src/ui/typography/Typography/Typography.ui')} />
      </slot>
    </router>
  )
}
