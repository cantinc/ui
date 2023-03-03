import { style, useHidden, useShow } from '@innet/dom'
import { useChildren, useContext } from '@innet/jsx'

import { Flex, type FlexProps, titleContext, titleSeparatorContext } from '../../layout'
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
  const contextTitle = useContext(titleContext)
  const titleSeparator = useContext(titleSeparatorContext)
  const styles = useStyle()

  if (h === 1 && (text !== undefined || contextTitle !== undefined)) {
    if (contextTitle) {
      document.title = !text || contextTitle === text ? contextTitle : `${contextTitle}${titleSeparator}${text}`
    } else if (text) {
      document.title = text
    }
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
