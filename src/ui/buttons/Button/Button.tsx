import { HTMLStyleProps, LinkProps, style } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'

import { AsyncSpin } from '../../content/AsyncSpin'
import styles from './Button.scss'

const useStyle = style(styles)

export type ButtonViews = 'primary' | 'secondary'
export type ButtonSizes = 'small' | 'default'

export interface ButtonProps extends HTMLStyleProps<HTMLButtonElement, typeof styles> {
  view?: ButtonViews
  loading?: () => boolean
  size?: ButtonSizes
  link?: LinkProps
  flex?: boolean | number
  danger?: boolean
}

export function Button ({
  view = 'primary',
  type,
  loading,
  size,
  disabled,
  danger,
  link,
  flex,
  style = '',
  ...props
}: ButtonProps = {}) {
  const children = useChildren()
  const styles = useStyle()

  const customClasses = {
    [styles.primary]: view === 'primary',
    [styles.secondary]: view === 'secondary',
    [styles.loading]: loading,
    [styles.small]: size === 'small',
    [styles.danger]: danger,
  }

  const className = () => classes([
    styles.root,
    customClasses,
  ])
  const disabledValue = (() => (disabled ?? loading?.()) || undefined) as unknown as boolean

  if (flex) {
    if (typeof flex === 'boolean') {
      flex = 1
    }

    style = `--ui-button-flex:${flex};${style}`
  }

  if (link) {
    return (
      <a {...link} style={style} class={className}>
        {() => loading?.() && <AsyncSpin class={styles.spin} />}
        <span class={styles.content}>
          {children}
        </span>
      </a>
    )
  }

  return (
    <button
      {...props}
      style={style}
      type={type}
      disabled={disabledValue}
      class={className}>
      {() => loading?.() && <AsyncSpin class={styles.spin} />}
      <span class={styles.content}>
        {children}
      </span>
    </button>
  )
}
