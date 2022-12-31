import { inject, StateProp, style, use } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'

import { Flex, FlexProps } from '../../layout'
import styles from './Button.scss'

const useStyle = style(styles)

export type ButtonViews = 'primary' | 'secondary' | 'negative' | 'positive'

export type ButtonProps <E extends HTMLElement = HTMLButtonElement> = FlexProps<E, {
  view?: ButtonViews
  loading?: StateProp<boolean>
  disabled?: StateProp<boolean>
}>

export function Button<E extends HTMLElement = HTMLButtonElement> ({
  view = 'primary',
  loading,
  disabled,
  ...props
}: ButtonProps<E> = {} as ButtonProps<E>) {
  const children = useChildren()
  const styles = useStyle()

  const className = () => classes([
    styles.root,
    {
      [styles.primary]: view === 'primary',
      [styles.secondary]: view === 'secondary',
      [styles.negative]: view === 'negative',
      [styles.positive]: view === 'positive',
      [styles.loading]: use(loading),
    },
  ])
  const disabledValue = (() => (disabled ?? use(loading)) || undefined) as unknown as boolean

  return (
    <Flex<any>
      justify='center'
      inline
      padding={24}
      element='button'
      {...props}
      disabled={disabledValue}
      class={className}>
      <show state={inject(loading, loading => !loading)}>
        {children}
      </show>
    </Flex>
  )
}
