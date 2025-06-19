import { type StateProp, style } from '@innet/dom'

import { Flex, type FlexProps, type FlexStyles } from '../../layout'
import { Title, type TitleProps } from '../Title'
import styles from './Section.scss'

const useStyle = style(styles, { root: '' })

export interface SectionStyles extends FlexStyles {
  title: any
}

export interface SectionProps extends FlexProps<'section', SectionStyles> {
  title?: string
  subtitle?: StateProp<string>
  titleProps?: TitleProps
  aside?: JSX.Element
}

export function Section ({
  title,
  titleProps,
  subtitle,
  children,
  aside,
  ...props
}: SectionProps = {}) {
  const styles = useStyle()

  return (
    <Flex
      element='section'
      align='stretch'
      vertical
      gap={24}
      {...props}
      class={() => styles.root}>
      <Title
        h={2}
        justify='between'
        align='end'
        gap={16}
        {...titleProps}
        subtitle={subtitle}
        title={title}
        class={() => styles.title}>
        {aside}
      </Title>
      {children}
    </Flex>
  )
}
