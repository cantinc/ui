import { randomHash } from '@cantinc/utils'
import { type ObservableProp, type StateProp, style, use, useMapIndex, useMapValue } from '@innet/dom'
import { Context, useChildren, useContext } from '@innet/jsx'
import { Cache, State, unwatch } from 'watch-state'

import { actionProp } from '../../../utils'
import { Icon } from '../../icons'
import styles from './Set.scss'

const useStyle = style(styles)

const key = Symbol('SetKey') as unknown as string

export type SetPropsHandler<P> = (item: ObservableProp<P>, index: ObservableProp<number>, Component: (props: P) => any, props: P) => P
export type SetPropsAddHandler<P> = (props: P) => P

export type SetProps<P> = Omit<P, 'value' | 'onchange' | 'element'> & {
  value?: StateProp<Partial<P>[]>
  onchange?: (value: Partial<P>[]) => void
  element: (props: P) => any
  handleItemProps?: SetPropsHandler<P>
  handleAddItemProps?: SetPropsAddHandler<P>
}

export const setPropsHandler = new Context<SetPropsHandler<any>>(item => item.value)

export function Set<P extends object> ({
  value = new State([]),
  onchange,
  element: Element,
  handleItemProps = useContext(setPropsHandler),
  handleAddItemProps = e => e,
  ...props
}: SetProps<P>) {
  const styles = useStyle()
  const children = useChildren()

  onchange = actionProp(value, onchange)

  const customValues = new Cache<Partial<P>[]>(() => {
    const values = use(value)

    for (const value of values) {
      if (key in value) continue
      // @ts-expect-error: unic value hack
      value[key] = randomHash()
    }

    return values
  })

  const handleAdd = () => {
    onchange?.([...use(value), handleAddItemProps({ ...props } as P)])
  }
  const handleRemove = (index: number) => {
    const newValue = [...use(value)]
    newValue.splice(index, 1)
    onchange?.(newValue)
  }

  const Item = () => {
    const item = useMapValue<P>()
    const index = useMapIndex()

    return (
      <Element {...props} {...unwatch(() => handleItemProps(item, index, Element, props as P))}>
        <slot name='after'>
          <Icon
            class={styles.remove}
            onclick={(e: MouseEvent) => {
              e.preventDefault()
              e.stopPropagation()
              handleRemove(use(index))
            }}
            icon='brick'
          />
        </slot>
      </Element>
    )
  }

  return (
    <>
      <map of={customValues} key={key}>
        <Item />
      </map>
      <div class={() => styles.root}>
        <button
          type='button'
          onclick={handleAdd}
          class={() => styles.addButton}>
          {children}
        </button>
      </div>
    </>
  )
}
