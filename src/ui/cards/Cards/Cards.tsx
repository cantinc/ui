import { Ref, style } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import { Flex, type FlexProps } from '../../layout'
import styles from './Cards.scss'

const useStyle = style(styles)

export interface CardsProps extends FlexProps {

}

export function * Cards ({
  ref = new Ref<HTMLDivElement>(),
  ...props
}: CardsProps = {}) {
  const styles = useStyle()
  const children = useChildren()
  const getTop = () => ref.value?.getBoundingClientRect().top

  yield (
    <Flex
      gap={24}
      wrap
      {...props}
      ref={ref}
      class={styles.root}>
      {children}
    </Flex>
  )

  ref.value?.style.setProperty('--ui-cards-top', `${getTop()}px`)
}
