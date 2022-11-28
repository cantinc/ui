import { WatchProp } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import { onDestroy, State } from 'watch-state'

import { FormContext, formContext } from '../../../hooks'
import { Flex, FlexProps } from '../../position'

export interface FormProps extends FlexProps<HTMLFormElement> {
  action?: WatchProp<string>
  loading?: State<boolean>
  notification?: string
}

export function Form ({
  loading = new State(false),
  action,
  notification,
  ...props
}: FormProps = {}) {
  const children = useChildren()

  const form: FormContext = {
    fields: new Set(),
    destroyed: false,
  }

  onDestroy(() => {
    form.destroyed = true
  })

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <context for={formContext} set={form}>
      <Flex<HTMLFormElement>
        element='form'
        onsubmit={handleSubmit}
        action={action}
        {...props}>
        {children}
      </Flex>
    </context>
  )
}
