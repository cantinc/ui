import { WatchProp } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import { State } from 'watch-state'

import { formContext } from '../../../hooks'
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

  const data = new FormData()

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault()
    console.log(data)
  }

  return (
    <context for={formContext} set={{ data }}>
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
