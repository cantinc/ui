import { useChildren } from '@innet/jsx'
import { onDestroy, State } from 'watch-state'

import { useForm } from '../../../hooks'
import { actionProp } from '../../../utils'
import { Set, SetProps } from '../../interaction'

export type FormSetProps <P> = SetProps<P> & {
  defaultValues?: Partial<P>[]
}

export function FormSet <P extends object> ({
  defaultValues = [],
  value = new State(defaultValues),
  onchange,
  ...props
}: FormSetProps<P>) {
  const children = useChildren()
  const form = useForm()
  const formElement = form.ref.value

  onchange = actionProp(value, onchange)

  if (formElement && onchange) {
    const resetListener = () => {
      onchange?.(defaultValues)
    }

    formElement.addEventListener('reset', resetListener)

    onDestroy(() => {
      if (!form.destroyed) {
        formElement.removeEventListener('reset', resetListener)
      }
    })
  }

  return (
    <Set<P> {...(props as SetProps<P>)} value={value} onchange={onchange}>
      {children}
    </Set>
  )
}
