import { inject, style } from '@innet/dom'

import { Check, type CheckProps } from '../../prototypes'
import styles from './Tag.scss'

const useStyle = style<typeof styles>(
  Object.assign({ root: '' }, styles),
)

export interface TagProps extends CheckProps {
  type?: 'checkbox' | 'radio'
}

export function Tag ({
  type = 'checkbox',
  label,
  ...props
}: TagProps) {
  const styles = useStyle()

  return (
    <Check
      type={type}
      {...props}
      label={inject(label, label => label && (
        <span class={() => styles.label}>{label}</span>
      ))}
      class={styles}
    />
  )
}
