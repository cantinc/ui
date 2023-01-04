import { HTMLStyleProps, style, use } from '@innet/dom'
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

export type FlexProps <E extends HTMLElement = HTMLElement, R = {}, S = any> = Omit<HTMLStyleProps<E, S>, keyof R | 'children'> & {
  vertical?: boolean
  align?: keyof typeof alignMap
  justify?: keyof typeof justifyMap
  gap?: number | [number, number]
  flex?: number | boolean
  wrap?: boolean
  inline?: boolean
  reverse?: boolean
  element?: string
  padding?: number | [number, number] | [number, number, number] | [number, number, number, number]
} & R

export function Flex <E extends HTMLElement = HTMLElement> ({
  vertical,
  align,
  justify,
  gap,
  flex,
  wrap,
  inline,
  reverse,
  style,
  padding,
  element: Element = 'div',
  ...props
}: FlexProps<E> = {} as any) {
  const children = useChildren()
  const styles = useStyle()
  let customStyle = ''

  if (inline) {
    customStyle = '--ui-flex:inline-flex;'
  }

  if (gap) {
    if (Array.isArray(gap)) {
      customStyle = `--ui-flex-gap:${gap[0]}px ${gap[1]}px;${customStyle}`
    } else {
      customStyle = `--ui-flex-gap:${gap}px;${customStyle}`
    }
  }

  if (padding) {
    if (Array.isArray(padding)) {
      customStyle = `--ui-flex-padding:${padding.join('px ')}px;${customStyle}`
    } else {
      customStyle = `--ui-flex-padding:${padding}px;${customStyle}`
    }
  }

  if (flex) {
    customStyle = `--ui-flex-flex:${flex === true ? 1 : flex};${customStyle}`
  }

  if (wrap) {
    customStyle = `--ui-flex-wrap:wrap;${customStyle}`
  }

  if (vertical) {
    customStyle = `--ui-flex-direction:${reverse ? 'column-reverse' : 'column'};${customStyle}`
  } else if (reverse) {
    customStyle = `--ui-flex-direction:row-reverse;${customStyle}`
  }

  if (align && align !== 'start') {
    customStyle = `--ui-flex-align:${alignMap[align]};${customStyle}`
  }

  if (justify && justify !== 'start') {
    customStyle = `--ui-flex-justify:${justifyMap[justify]};${customStyle}`
  }

  return (
    <Element
      {...props}
      style={() => `${customStyle}${use(style || '')}`}
      class={() => styles.root}>
      {children}
    </Element>
  )
}
