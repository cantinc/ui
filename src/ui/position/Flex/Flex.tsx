import { HTMLProps, Style, style, use } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import styles from './Flex.scss'

const useStyle = style(styles)

export const alignMap = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  stretch: 'stretch',
} as const

export const justifyMap = {
  ...alignMap,
  between: 'space-between',
  around: 'space-around',
} as const

export interface FlexProps extends Style, HTMLProps {
  vertical?: boolean
  align?: keyof typeof alignMap
  justify?: keyof typeof justifyMap
  gap?: number | [number, number]
  flex?: number | boolean
  wrap?: boolean
  inline?: boolean
  reverse?: boolean
  element?: string
}

export function Flex ({
  vertical,
  align,
  justify,
  gap,
  flex,
  wrap,
  inline,
  reverse,
  style = '',
  element: Element = 'div',
  ...props
}: FlexProps = {}) {
  const children = useChildren()
  const styles = useStyle()

  const originStyle = style
  style = ''

  if (inline) {
    style = '--ui-flex:inline-flex;'
  }

  if (gap) {
    if (Array.isArray(gap)) {
      style = `--ui-flex-gap:${gap[0]}px ${gap[1]}px;${style}`
    } else {
      style = `--ui-flex-gap:${gap}px;${style}`
    }
  }

  if (flex) {
    style = `--ui-flex-flex:${flex === true ? 1 : flex};${style}`
  }

  if (wrap) {
    style = `--ui-flex-wrap:wrap;${style}`
  }

  if (vertical) {
    style = `--ui-flex-direction:${reverse ? 'column-reverse' : 'column'};${style}`
  } else if (reverse) {
    style = `--ui-flex-direction:row-reverse;${style}`
  }

  if (align && align !== 'start') {
    style = `--ui-flex-align:${alignMap[align]};${style}`
  }

  if (justify && justify !== 'start') {
    style = `--ui-flex-justify:${justifyMap[justify]};${style}`
  }

  return (
    <Element
      {...props}
      style={() => `${style}${use(originStyle)}`}
      class={() => styles.root}>
      {children}
    </Element>
  )
}
