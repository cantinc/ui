import { style, useHidden, useShow } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import { Flex, type FlexProps } from '../../layout'
import styles from './Title.scss'

const useStyle = style(styles)

export interface TitleProps extends FlexProps<HTMLHeadingElement> {
  h?: 1 | 2 | 3 | 4 | 5 | 6
  text?: string
}

export function Title ({
  h = 1,
  text,
  ...props
}: TitleProps = {}) {
  const children = useChildren()
  const show = useShow()
  const hide = useHidden()
  const styles = useStyle()

  if (text !== undefined && h === 1) {
    document.title = text
  }

  return (
    <Flex<HTMLHeadingElement>
      element={`h${h}`}
      {...props}
      class={() => [
        styles.root,
        show.value && styles.show,
        hide?.value && styles.hide,
      ]}>
      {text}
      {children}
    </Flex>
  )
}
