import { HTMLProps, LoopItem, Ref, Style, style } from '@innet/dom'
import classes from 'html-classes'
import { onDestroy, State, Watch } from 'watch-state'

import { Markdown } from '../../typography'
import { NotificationOptions } from '../Notifications/types'
import { Timer } from './helpers'
import styles from './Notification.scss'

const useStyle = style(styles)

export interface NotificationProps extends Style, HTMLProps<HTMLDivElement> {
  notification: LoopItem<NotificationOptions>
  onclose: () => void
}

export function Notification ({
  notification,
  onclose,
}: NotificationProps) {
  const styles = useStyle()
  const hidden = new Ref<State<boolean>>()
  const timer = new Timer(onclose, notification.value.timeout * 1000)

  const pause = () => timer.pause()
  const play = () => {
    timer.play()
  }

  new Watch((update) => {
    if (notification.index === 0) {
      if (update) {
        timer.delay += 300
      }
      play()
    }
  })

  onDestroy(() => timer.destroy())

  return (
    <delay ref={hidden} hide={300}>
      <div
        onmouseenter={pause}
        onmouseleave={play}
        class={() => classes([
          styles.root,
          notification.value.type && styles[notification.value.type],
          hidden.value?.value && styles.hidden,
        ])}>
        <Markdown text={notification.value.content} />
        <div
          class={styles.progress}
          style={`animation-duration: ${`${notification.value.timeout}s`}`}
        />
      </div>
    </delay>
  )
}
