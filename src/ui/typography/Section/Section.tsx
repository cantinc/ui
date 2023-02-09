import { style } from '@innet/dom'
import { useSlots } from '@innet/jsx'

import { Flex, type FlexProps } from '../../layout'
import { Title, type TitleProps } from '../Title'
import styles from './Section.scss'

const useStyle = style(styles)

export interface SectionProps extends FlexProps<HTMLDivElement> {
  title?: string

  titleProps?: TitleProps
}

export function Section ({
  title,
  titleProps,
  ...props
}: SectionProps = {}) {
  const { '': children, title: aside } = useSlots()
  const styles = useStyle()

  return (
    <Flex
      element='section'
      align='stretch'
      vertical
      {...props}
      class={() => styles.root}>
      <Title
        h={2}
        justify='between'
        align='end'
        {...titleProps}
        text={title}
        class={() => styles.title}>
        {aside}
      </Title>
      {children}
    </Flex>
  )
}
