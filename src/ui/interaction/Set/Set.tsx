import { randomHash } from '@cantinc/utils'
import { type LoopItem, type StateProp, style, use } from '@innet/dom'
import { Context, useChildren, useContext } from '@innet/jsx'
import { Cache, State, unwatch } from 'watch-state'

import { actionProp } from '../../../utils'
import { Icon } from '../../icons'
import styles from './Set.scss'

const useStyle = style(styles)

const key = Symbol('SetKey') as unknown as string

export type SetPropsHandler<P> = (item: LoopItem<P>, Component: (props: P) => any) => P

export type SetProps<P> = Omit<P, 'value' | 'onchange' | 'element'> & {
  value?: StateProp<Partial<P>[]>
  onchange?: (value: Partial<P>[]) => void
  element: (props: P) => any
  handleItemProps?: SetPropsHandler<P>
}

export const setPropsHandler = new Context<SetPropsHandler<any>>(item => item.value)

export function Set<P extends object> ({
  value = new State([]),
  onchange,
  element: Element,
  handleItemProps = useContext(setPropsHandler),
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
          <Element {...props} {...unwatch(() => handleItemProps(item, Element))}>
            <slot name='after'>
              <Icon
                class={styles.remove}
                onclick={(e: MouseEvent) => {
                  e.preventDefault()
                  e.stopPropagation()
                  handleRemove(item.index)
                }}
                icon='brick'
              />
            </slot>
          </Element>
        )}
      </for>
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
