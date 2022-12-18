import { HTMLStyleProps, Ref, style, use } from '@innet/dom'
import { useContext } from '@innet/jsx'
import classes from 'html-classes'

import { selectorContext } from '../Selector/constants'
import styles from './SelectorItem.scss'

const useStyle = style(styles)

export interface SelectorItemProps extends HTMLStyleProps<HTMLDivElement> {
  value: string
  label?: string
}

export function * SelectorItem ({
  value,
  label,
  onmousedown,
  onmouseenter,
  ref = new Ref<HTMLDivElement>(),
  ...props
}: SelectorItemProps) {
  const styles = useStyle()
  const { hide, value: selectorValue, setValue, showValues, preselect, setPreselect } = useContext(selectorContext)

  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    setValue?.(value)
    hide()
    ;(onmousedown as any)?.(e)
  }

  const updatePreselect = () => {
    if (use(selectorValue) === value) {
      setPreselect(undefined)
    } else {
      setPreselect({ value, label })
    }
  }

  yield (
    <div
      {...props}
      ref={ref}
      onmouseenter={(e: MouseEvent) => {
        updatePreselect()
        ;(onmouseenter as any)?.(e)
      }}
      onmousedown={handleClick}
      class={() => classes([
        styles.root,
        use(selectorValue) === value && styles.selected,
        preselect()?.value === value && styles.preselect,
      ])}>
      {label || value}
      {showValues && (
        <span class={styles.value}>
          {value}
        </span>
      )}
    </div>
  )

  ;(ref?.value as any).preselect = updatePreselect
}
