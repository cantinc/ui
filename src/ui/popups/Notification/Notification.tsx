import { type HTMLStyleProps, inject, Ref, style, use, useMapIndex, useMapValue } from '@innet/dom'
import classes from 'html-classes'
import { onDestroy, type State, Watch } from 'watch-state'

import { Markdown } from '../../typography'
import { type NotificationOptions } from '../Notifications/types'
import { Timer } from './helpers'
import styles from './Notification.scss'

const useStyle = style(styles)

export interface NotificationProps extends HTMLStyleProps<HTMLDivElement> {
  onclose: () => void
}

export function Notification ({
  onclose,
}: NotificationProps) {
  const styles = useStyle()
  const notification = useMapValue<NotificationOptions>()
  const index = useMapIndex()
  const hidden = new Ref<State<boolean>>()
  const timer = new Timer(onclose, use(notification).timeout * 1000)

  const pause = () => timer.pause()
  const play = () => {
    timer.play()
  }

  new Watch((update) => {
    if (use(index) === 0) {
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
          use(inject(notification, notification => notification.type && styles[notification.type])),
          hidden.value?.value && styles.hidden,
        ])}>
        <Markdown text={inject(notification, notification => notification.content)} />
        <div
          class={styles.progress}
          style={{
            'animation-duration': inject(notification, notification => `${notification.timeout}s`),
          }}
        />
      </div>
    </delay>
  )
}
