import { type HTMLStyleProps, Ref, type StateProp, style, use } from '@innet/dom'
import classes from 'html-classes'

import styles from './Option.scss'

const useStyle = style(styles)

export interface OptionProps extends HTMLStyleProps<HTMLDivElement> {
  value: string
  label?: string
  showValues?: boolean
  preselected?: StateProp<boolean>
  selected?: StateProp<boolean>
  onPreselect?: () => void
  onSelect?: () => void
}

export function Option ({
  value,
  label,
  showValues,
  preselected,
  selected,
  onPreselect,
  onSelect,
  onmousedown,
  onmouseenter,
  ref = new Ref<HTMLDivElement>(),
  ...props
}: OptionProps) {
  const styles = useStyle()

  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    onSelect?.()
    ;(onmousedown as any)?.(e)
  }

  return (
    <div
      {...props}
      ref={ref}
      onmouseenter={(e: MouseEvent) => {
        onPreselect?.()
        ;(onmouseenter as any)?.(e)
      }}
      onmousedown={handleClick}
      class={() => classes([
        styles.root,
        use(selected) && styles.selected,
        use(preselected) && styles.preselected,
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
