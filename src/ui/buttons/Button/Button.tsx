import { LinkProps, StateProp, style, use } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'

import { AsyncSpin } from '../../content/AsyncSpin'
import { Flex, FlexProps } from '../../layout'
import styles from './Button.scss'

const useStyle = style(styles)

export type ButtonViews = 'primary' | 'secondary' | 'negative' | 'positive'

export interface ButtonProps extends FlexProps<HTMLButtonElement>, Omit<LinkProps, 'ref' | 'class'> {
  view?: ButtonViews
  loading?: StateProp<boolean>
  link?: boolean
}

export function Button ({
  view = 'primary',
  type,
  loading,
  disabled,
  link,
  ...props
}: ButtonProps = {}) {
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
    <Flex
      justify='center'
      element={link ? 'a' : 'button'}
      inline
      padding={24}
      {...props}
      type={type}
      disabled={disabledValue}
      class={className}>
      <show state={loading}>
        <AsyncSpin class={() => styles.spin} />
      </show>
      {children}
    </Flex>
  )
}
