import { LoopItem, StateProp, style, use } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import { Cache, State, unwatch } from 'watch-state'

import { actionProp, randomHash } from '../../../utils'
import { Icon } from '../../icons'
import styles from './Set.scss'

const useStyle = style(styles)

const key = Symbol('SetKey') as unknown as string

export type SetProps<P> = Omit<P, 'value' | 'onchange' | 'element'> & {
  value?: StateProp<P[]>
  onchange?: (value: P[]) => void
  element: (props: P) => any
  handleItemProps?: (index: LoopItem<P>) => P
}
export function Set<P extends object> ({
  value = new State([]),
  onchange,
  element: Element,
  handleItemProps = item => item.value,
  ...props
}: SetProps<P>) {
  const styles = useStyle()
  const children = useChildren()

  onchange = actionProp(value, onchange)

  const customValues = new Cache<P[]>(() => {
    const values = use(value)

    for (const value of values) {
      if (key in value) continue
      // @ts-expect-error
      value[key] = randomHash()
    }

    return values
  })

  const handleAdd = () => {
    onchange?.([...use(value), { ...props } as P])
  }
  const handleRemove = (index: number) => {
    const newValue = [...use(value)]
    newValue.splice(index, 1)
    onchange?.(newValue)
  }

  return (
    <>
      <for of={customValues} key={key}>
        {(item: LoopItem<P>) => (
          <Element {...unwatch(() => handleItemProps(item))}>
            <slot name='after'>
              <Icon
                class={styles.remove}
                onclick={() => handleRemove(item.index)}
                icon='brick'
              />
            </slot>
          </Element>
        )}
      </for>
      <button
        type='button'
        onclick={handleAdd}
        class={() => styles.addButton}>
        {children}
      </button>
    </>
  )
}
