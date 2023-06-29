import { type StateProp, style, use, useHidden, useShow } from '@innet/dom'
import { useChildren, useContext } from '@innet/jsx'
import { Cache } from 'watch-state'

import { Flex, type FlexProps, titleContext, titleSeparatorContext } from '../../layout'
import styles from './Title.scss'

const useStyle = style(styles)

export interface TitleProps extends FlexProps<HTMLHeadingElement> {
  h?: 1 | 2 | 3 | 4 | 5 | 6
  title?: string
  accent?: boolean
  subtitle?: StateProp<string>
}

export function Title ({
  h = 1,
  title,
  subtitle,
  accent,
  ...props
}: TitleProps = {}) {
  const children = useChildren()
  const show = useShow()
  const hide = useHidden()
  const contextTitle = useContext(titleContext)
  const titleSeparator = useContext(titleSeparatorContext)
  const styles = useStyle()
  const showSubtitle = subtitle ? new Cache(() => Boolean(use(subtitle))) : null

  if (h === 1 && (title !== undefined || contextTitle !== undefined)) {
    if (contextTitle) {
      document.title = !title || contextTitle === title ? contextTitle : `${contextTitle}${titleSeparator}${title}`
    } else if (title) {
      document.title = title
    }
  }

  return (
    <Flex<HTMLHeadingElement>
      element={`h${h}`}
      wrap
      {...props}
      class={() => [
        styles.root,
        accent && styles.accent,
        show.value && styles.show,
        hide?.value && styles.hide,
      ]}>
      {title}
      {children}
      <show when={showSubtitle}>
        <div class={() => styles.subTitle}>
          {subtitle}
        </div>
      </show>
    </Flex>
  )
}
