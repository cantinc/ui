import { inject, type StateProp, style } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'

import { Flex, type FlexProps } from '../../layout'
import styles from './Button.scss'

const useStyle = style(styles)

export type ButtonViews = 'primary' | 'secondary' | 'negative' | 'positive' | 'ghost'

export type ButtonProps <E extends HTMLElement = HTMLButtonElement> = FlexProps<E, {
  view?: ButtonViews
  width?: StateProp<number>
  disabled?: StateProp<boolean>
}>

export function Button<E extends HTMLElement = HTMLButtonElement> ({
  view = 'primary',
  loading,
  disabled,
  width,
  ...props
}: ButtonProps<E> = {} as ButtonProps<E>) {
  const children = useChildren()
  const styles = useStyle()

  const className = () => classes([
    styles.root,
    styles[view],
  ])

  return (
    <Flex<any>
      justify='center'
      inline
      padding={24}
      element='button'
      loadingOffset={1}
      disabled={loading}
      {...props}
      loading={loading}
      style={{
        ...props?.style,
        '--ui-button-width': inject(width, width => width !== undefined ? `${width}px` : ''),
      }}
      class={className}>
      {children}
    </Flex>
  )
}
