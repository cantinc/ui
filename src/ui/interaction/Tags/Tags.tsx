import { type LoopItem, type StateProp, use } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import { State, unwatch } from 'watch-state'

import { actionProp } from '../../../utils'
import { Flex, type FlexProps } from '../../layout'
import { Tag, type TagProps } from '../Tag'

export interface TagsItem extends Omit<TagProps, 'type'> {
  value: string
}

export type ITags = TagsItem[]

export interface TagsMainProps extends Omit<FlexProps, 'onchange'> {
  values?: StateProp<ITags>
}

export interface TagsSingleProps extends TagsMainProps {
  value?: StateProp<string>
  onchange?: (value: string) => void
  multiple?: false
}

export interface TagsMultipleProps extends TagsMainProps {
  value?: StateProp<string[]>
  onchange?: (value: string[]) => void
  multiple: true
}

export type TagsProps = TagsSingleProps | TagsMultipleProps

export function Tags ({
  values,
  multiple,
  value = new State(multiple ? [] : '') as any,
  onchange,
  ...props
}: TagsProps = {}) {
  const children = useChildren()

  onchange = actionProp<any>(value, onchange)

  return (
    <Flex gap={8} {...props}>
      <for of={values} key='value'>
        {(item: LoopItem<TagsItem>) => {
          const tag = unwatch(() => item.value)

          return (
            <Tag
              {...tag}
              checked={() => {
                const currentValue: any = use(value)

                return multiple
                  ? currentValue.includes(tag.value)
                  : currentValue === tag.value
              }}
              onchange={val => {
                if (onchange) {
                  if (multiple) {
                    if (val) {
                      onchange([...use(value as StateProp<string[]>), tag.value] as any)
                    } else {
                      onchange(use(value as StateProp<string[]>).filter(v => v !== tag.value) as any)
                    }
                  } else {
                    onchange(tag.value as any)
                  }
                }

                tag.onchange?.(val)
              }}
              type={multiple ? 'checkbox' : 'radio'}
            />
          )
        }}
      </for>
      {children}
    </Flex>
  )
}
