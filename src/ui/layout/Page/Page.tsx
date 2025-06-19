import { Delay, onMounted, Ref, style } from '@innet/dom'
import { locationHash } from '@watch-state/history-api'
import { type FlexElement } from 'src/ui'
import { type State } from 'watch-state'
import { scrollTo } from 'web-scroll'

import { Flex, type FlexProps, type FlexStyles } from '../Flex'
import styles from './Page.scss'

const useStyle = style(styles)

export interface PageStyles extends FlexStyles {
  hide: string
}

export type PageProps <T extends FlexElement = 'div'> = FlexProps<T, PageStyles>

export function Page<T extends FlexElement = 'div'> (props: PageProps<T>) {
  const hidden = new Ref<State<boolean>>()
  const styles = useStyle()

  onMounted(() => {
    const hash = locationHash.value

    if (hash) {
      scrollTo(`#${hash}`)
    }
  }, 300)

  return (
    <Delay show={300} hide={300} ref={hidden}>
      <Flex
        vertical
        align='stretch'
        flex
        {...props}
        class={[styles.root, () => hidden.value?.value && styles.hide]}
      />
    </Delay>
  )
}
