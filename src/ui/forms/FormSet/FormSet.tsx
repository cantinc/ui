import { required } from '@cantinc/utils'
import { useChildren } from '@innet/jsx'
import { onDestroy, State } from 'watch-state'

import { useForm } from '../../../hooks'
import { actionProp } from '../../../utils'
import { Set, SetProps } from '../../interaction'

export type FormSetProps <P> = SetProps<P> & {
  name: string
  defaultValues?: Partial<P>[]
  requiredSet?: boolean
}

export function FormSet <P extends object> ({
  defaultValues = [],
  value = new State(defaultValues),
  onchange,
  requiredSet,
  name,
  ...props
}: FormSetProps<P>) {
  const children = useChildren()
  const form = useForm()
  const formElement = form.ref.value

  onchange = actionProp(value, onchange)

  if (requiredSet) {
    form.validation[name] = required(form.validation[name])
  }

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
    <Set<P> {...(props as SetProps<P>)} name={name} value={value} onchange={onchange}>
      {children}
    </Set>
  )
}
