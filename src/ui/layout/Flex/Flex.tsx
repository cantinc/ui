import { Hide, type HTMLStyleProps, inject, injectPx, type StateProp, style, use } from '@innet/dom'
import classes from 'html-classes'

import { type Merge } from '../../../types'
import styles from './Flex.scss'

const useStyle = style(styles)

export type FlexAlignJustify = 'flex-start' | 'flex-end' | 'center' | 'stretch'
export type FlexAlign = FlexAlignJustify | 'baseline' | undefined
export type FlexJustify = FlexAlignJustify | 'space-between' | 'space-around' | undefined

export interface FlexStyles {
  root: string
  load: string
  loading: string
}

export type FlexElement = keyof HTMLElementTagNameMap

export type FlexProps <T extends FlexElement = 'div', S extends FlexStyles = FlexStyles> = Merge<HTMLStyleProps<HTMLElementTagNameMap[T], S>, {
  element?: T
  vertical?: StateProp<boolean>
  loading?: StateProp<boolean>
  loadingOffset?: StateProp<number>
  align?: StateProp<FlexAlign>
  justify?: StateProp<FlexJustify>
  gap?: StateProp<number | [number, number]>
  flex?: StateProp<number | boolean>
  wrap?: StateProp<boolean>
  inline?: StateProp<boolean>
  reverse?: StateProp<boolean>
  padding?: StateProp<number | [number, number] | [number, number, number] | [number, number, number, number]>
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
        '--ui-flex-justify': justify,
        '--ui-flex-align': align,
        '--ui-flex-wrap': inject(wrap, wrap => wrap ? 'wrap' : ''),
        '--ui-flex-flex': inject(flex, flex => String(flex === true ? 1 : flex || '')),
        '--ui-flex': inject(inline, inline => inline ? 'inline-flex' : ''),
        '--ui-flex-direction': inject(vertical, vertical => (
          vertical
            ? inject(reverse, reverse => reverse ? 'column-reverse' : 'column')
            : inject(reverse, reverse => reverse ? 'row-reverse' : '')
        )),
        '--ui-flex-padding': injectPx(padding),
        '--ui-flex-gap': injectPx(gap),
        '--ui-flex-loading-offset': injectPx(loadingOffset),
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
