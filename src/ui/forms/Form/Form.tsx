import { WatchProp } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import { onDestroy, State } from 'watch-state'

import { FormContext, formContext } from '../../../hooks'
import { notify } from '../../popups'
import { Flex, FlexProps } from '../../position'

export interface FormProps extends FlexProps<HTMLFormElement> {
  action?: WatchProp<string>
  loading?: State<boolean>
  notification?: string
  onsuccess?: () => void
}

export function Form ({
  loading = new State(false),
  action,
  notification,
  onsuccess,
  ...props
}: FormProps = {}) {
  const children = useChildren()

  const form: FormContext = {
    fields: new Set(),
    destroyed: false,
    loading: new State(false),
  }

  onDestroy(() => {
    form.destroyed = true
  })

  const handleSuccess = () => {
    if (notification) {
      notify(notification, 'success')
    }
    onsuccess?.()
  }

  const validation = () => {
    for (const field of form.fields) {
      if (field.required && !field.state.value) {
        field.element.value.focus()
        return true
      }
    }
  }

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault()

    const error = validation()

    if (!error) {
      handleSuccess()
    }
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
