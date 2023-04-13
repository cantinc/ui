import { Ref, style } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import { Flex, type FlexProps } from '../../layout'
import styles from './Cards.scss'

const useStyle = style(styles)

export interface CardsProps extends FlexProps {
  timeout?: number
}

export function Cards ({
  ref = new Ref<HTMLDivElement>(),
  timeout,
  ...props
}: CardsProps = {}) {
  const styles = useStyle()
  const children = useChildren()
  const getTop = () => ref.value?.getBoundingClientRect().top

  const updateTop = () => {
    ref.value?.style.setProperty('--ui-cards-top', `${getTop()}px`)
  }

  if (timeout) {
    setTimeout(updateTop, timeout)
  }

  queueMicrotask(updateTop)

  return (
    <Flex
      gap={24}
      wrap
      {...props}
      ref={ref}
      class={styles.root}>
      {children}
    </Flex>
  )
}
