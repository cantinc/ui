import { Show, type StateProp, style, use, useHidden } from '@innet/dom'
import { Context, useChildren, useContext } from '@innet/jsx'
import { Cache } from 'watch-state'

import { Flex, type FlexProps } from '../../layout'
import styles from './Title.scss'

const useStyle = style(styles)

export const titleContext = new Context<string>()
export const titleSeparatorContext = new Context<string>()

export interface TitleProps extends FlexProps<'h1'> {
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
    <Flex
      element={`h${h}`}
      wrap
      {...props}
      class={() => [
        styles.root,
        accent && styles.accent,
        hide?.value && styles.hide,
      ]}>
      {title}
      {children}
      <Show when={showSubtitle}>
        <div class={() => styles.subTitle}>
          {subtitle}
        </div>
      </Show>
    </Flex>
  )
}
