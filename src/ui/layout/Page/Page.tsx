import { useHidden, useShow } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import { locationHash } from '@watch-state/history-api'
import classes from 'html-classes'
import { onDestroy } from 'watch-state'
import { scrollTo } from 'web-scroll'

import { Flex, type FlexProps } from '../../layout/Flex'
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
  const children = useChildren()
  const show = useShow()
  const hidden = useHidden()

  const timer = setTimeout(() => {
    const hash = locationHash.value
    if (hash) {
      scrollTo(`#${hash}`)
    }
  }, 300)

  onDestroy(() => clearTimeout(timer))

  return (
    <Flex
      vertical
      align='stretch'
      flex
      {...props}
      class={() => classes([
        styles.root,
        show.value && styles.show,
        hidden?.value && styles.hide,
      ])}>
      {children}
    </Flex>
  )
}
