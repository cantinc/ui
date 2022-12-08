import { HTMLStyleProps, style, use } from '@innet/dom'
import { useContext } from '@innet/jsx'
import classes from 'html-classes'

import { selectorContext } from '../Selector/constants'
import styles from './SelectorItem.scss'

const useStyle = style(styles)

export interface SelectorItemProps extends HTMLStyleProps<HTMLDivElement> {
  value: string
  label?: string
}

export function SelectorItem ({
  value,
  label,
  onmousedown,
  ...props
}: SelectorItemProps) {
  const styles = useStyle()
  const { hide, value: selectorValue, setValue, showValues } = useContext(selectorContext)

  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    setValue(value, label)
    hide()
    ;(onmousedown as any)?.(e)
  }

  return (
    <div
      {...props}
      onmousedown={handleClick}
      class={() => classes([
        styles.root,
        use(selectorValue) === value && styles.selected,
      ])}>
      {label || value}
      {showValues && (
        <span class={styles.value}>
          {value}
        </span>
      )}
    </div>
  )
}
