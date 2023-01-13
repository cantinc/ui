import { LoopItem, StateProp, style, use } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import { Cache, State, unwatch } from 'watch-state'

import { actionProp, randomHash } from '../../../utils'
import { Icon } from '../../icons'
import { Input, InputProps } from '../Input'
import styles from './InputSet.scss'

const useStyle = style(styles)

export interface InputSetProps extends Omit<InputProps, 'value' | 'oninput'> {
  value?: StateProp<string[]>
  oninput?: (value: string[]) => void
}
export function InputSet ({
  value = new State([]),
  oninput,
  ...props
}: InputSetProps) {
  const styles = useStyle()
  const children = useChildren()
  const keys = unwatch(() => use(value).map(() => randomHash()))

  oninput = actionProp(value, oninput)

  const customValues = new Cache(() => use(value).map((value, index) => ({ key: keys[index], value })))

  const handleAdd = () => {
    keys.push(randomHash())
    oninput?.([...use(value), ''])
  }
  const handleRemove = (index: number) => {
    keys.splice(index, 1)
    const newValue = [...use(value)]
    newValue.splice(index, 1)
    oninput?.(newValue)
  }
  const handleChange = (index: number, val: string) => {
    const newValue = [...use(value)]
    newValue[index] = val
    oninput?.(newValue)
  }

  return (
    <>
      <for of={customValues} key='key'>
        {(item: LoopItem<{ key: string, value: string }[]>) => (
          <Input
            value={() => use(value)[item.index]}
            oninput={val => handleChange(item.index, val)}
            {...props}
            label={() => {
              const lab = use(props.label)
              return lab ? `${lab} ${item.index + 1}` : ''
            }}>
            <slot name='after'>
              <Icon
                class={styles.remove}
                onclick={() => handleRemove(item.index)}
                icon='brick'
              />
            </slot>
          </Input>
        )}
      </for>
      <div class={styles.addPanel}>
        <span class={styles.add} onclick={handleAdd}>
          {children}
        </span>
      </div>
    </>
  )
}
