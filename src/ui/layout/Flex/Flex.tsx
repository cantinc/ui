import { HTMLStyleProps, style } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import styles from './Flex.scss'

const useStyle = style(styles)

export const alignJustifyMap = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  stretch: 'stretch',
} as const
export const alignMap = {
  ...alignJustifyMap,
  baseline: 'baseline',
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

  return (
    <Element
      {...props}
      style={{
        ...style,
        '--ui-flex-justify': justify && justify !== 'start' ? justifyMap[justify] : '',
        '--ui-flex-align': align && align !== 'start' ? alignMap[align] : '',
        '--ui-flex-wrap': wrap ? 'wrap' : '',
        '--ui-flex-flex': String(flex === true ? 1 : flex || ''),
        '--ui-flex': inline ? 'inline-flex' : '',
        '--ui-flex-direction': vertical ? (reverse ? 'column-reverse' : 'column') : reverse ? 'row-reverse' : '',
        '--ui-flex-padding': !padding ? '' : Array.isArray(padding) ? `${padding.join('px ')}px` : `${padding}px`,
        '--ui-flex-gap': !gap ? '' : Array.isArray(gap) ? `${gap[0]}px ${gap[1]}px` : `${gap}px`,
      }}
      class={() => styles.root}>
      {children}
    </Element>
  )
}
