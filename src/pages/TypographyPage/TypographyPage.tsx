import { Flex, Markdown, Typography } from 'src/ui'

import description from './README.md'

const colors = ['primary', 'secondary', 'negative', 'warning', 'positive']
const sizes = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
const surface = ['gray', 'blue', 'purple', 'yellow', 'green']

export default function TypographyPage () {
  const props = getComputedStyle(document.documentElement)

  return (
    <Typography>
      <Markdown text={description} />
      <h2>Color theme</h2>
      <h3>Gray</h3>
      {sizes.map(size => (
        <Flex
          flex
          padding={16}
          style={{
            background: `var(--color-${size})`,
            color: `var(--color-${size > 50 ? 0 : 100})`,
          }}>
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
              style={{
                background: `var(--color-${color}-${size})`,
                color: `var(--color-${size > 50 ? 0 : 100})`,
              }}>
              {`--color-${color}-${size}`}: {props.getPropertyValue(`--color-${color}-${size}`)}
            </Flex>
          ))}
        </>
      ))}
      <h3>Surface</h3>
      {surface.map(color => (
        <Flex
          flex
          padding={16}
          style={{
            background: `var(--color-surface-${color})`,
            color: 'var(--color-0)',
          }}>
          {`--color-surface-${color}`}: {props.getPropertyValue(`--color-surface-${color}`)}
        </Flex>
      ))}
    </Typography>
  )
}
