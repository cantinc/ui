import { Hide, type HTMLStyleProps, inject, type StateProp, style, use } from '@innet/dom'
import classes from 'html-classes'

import { type Merge } from '../../../types'
import styles from './Flex.scss'

const useStyle = style(styles)

export interface FlexStyles {
  root: string
  load: string
  loading: string
}

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

export type FlexElement = keyof HTMLElementTagNameMap

export type FlexProps <T extends FlexElement = 'div', S extends FlexStyles = FlexStyles> = Merge<HTMLStyleProps<HTMLElementTagNameMap[T], S>, {
  element?: T
  vertical?: StateProp<boolean>
  loading?: StateProp<boolean>
  loadingOffset?: StateProp<number>
  align?: keyof typeof alignMap
  justify?: keyof typeof justifyMap
  gap?: number | [number, number]
  flex?: number | boolean
  wrap?: boolean
  inline?: boolean
  reverse?: boolean
  padding?: number | [number, number] | [number, number, number] | [number, number, number, number]
  children?: JSX.Element
}>

export function Flex <T extends FlexElement = 'div'> ({
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
  element: Element = 'div' as T,
  loading,
  loadingOffset = 0,
  children,
  ...props
}: FlexProps<T>) {
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
        '--ui-flex-direction': inject(vertical, vertical => vertical ? (reverse ? 'column-reverse' : 'column') : reverse ? 'row-reverse' : ''),
        '--ui-flex-padding': !padding ? '' : Array.isArray(padding) ? `${padding.join('px ')}px` : `${padding}px`,
        '--ui-flex-gap': !gap ? '' : Array.isArray(gap) ? `${gap[0]}px ${gap[1]}px` : `${gap}px`,
        '--ui-flex-loading-offset': () => `${use(loadingOffset)}px`,
      }}
      class={() => classes([
        styles.root,
        loading && styles.load,
        use(loading) && styles.loading,
      ])}>
      <Hide when={loading}>
        {children}
      </Hide>
    </Element>
  )
}
