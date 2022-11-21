import { useHidden, useShow } from '@innet/dom'
import { useChildren, useSlots } from '@innet/jsx'
import classes from 'html-classes'

import { Flex, FlexProps } from '../../position'
import styles from './Page.scss'

export interface PageProps extends FlexProps {

}
export interface DelayPageProps extends PageProps {
  show?: number
  hide?: number
}

export function DelayPage ({
  show = 300,
  hide = 300,
  ...props
}: DelayPageProps = {}) {
  const children = useChildren()

  return (
    <delay hide={hide} show={show}>
      <Page {...props}>
        {children}
      </Page>
    </delay>
  )
}

export function Page (props: PageProps) {
  const { '': children, title } = useSlots()
  const show = useShow()
  const hidden = useHidden()

  return (
    <Flex
      vertical
      {...props}
      class={() => classes([
        styles.root,
        show.value && styles.show,
        hidden?.value && styles.hide,
      ])}>
      {title && (
        <h1 class={styles.title}>{title}</h1>
      )}
      {children}
    </Flex>
  )
}
