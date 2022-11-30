import { Ref, style } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import { Flex, FlexProps } from '../../layout'
import styles from './Cards.scss'

const useStyle = style(styles)

export interface CardsProps extends FlexProps {

}

export function * Cards (props: CardsProps) {
  const styles = useStyle()
  const children = useChildren()
  const element = new Ref<HTMLDivElement>()
  const getTop = () => element.value?.getBoundingClientRect().top

  yield (
    <Flex
      gap={24}
      wrap
      {...props}
      ref={element}
      class={styles.root}>
      {children}
    </Flex>
  )

  element.value?.style.setProperty('--ui-cards-top', `${getTop()}px`)
}
