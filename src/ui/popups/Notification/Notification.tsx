import { Delay, type HTMLStyleProps, inject, Ref, type StateProp, style, use } from '@innet/dom'
import classes from 'html-classes'
import { onDestroy, type State, Watch } from 'watch-state'

import { Markdown } from '../../typography'
import { type NotificationOptions } from '../Notifications/types'
import { Timer } from './helpers'
import styles from './Notification.scss'

const useStyle = style(styles)

export interface NotificationProps extends HTMLStyleProps<HTMLDivElement> {
  option: StateProp<NotificationOptions>
  index: StateProp<number>
  onclose: () => void
}

export function Notification ({
  option,
  index,
  onclose,
}: NotificationProps) {
  const styles = useStyle()
  const hidden = new Ref<State<boolean>>()
  const timer = new Timer(onclose, use(option).timeout * 1000)

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
    <Delay ref={hidden} hide={300}>
      <div
        onmouseenter={pause}
        onmouseleave={play}
        class={() => classes([
          styles.root,
          use(inject(option, notification => notification.type && styles[notification.type])),
          () => hidden.value?.value && styles.hidden,
        ])}>
        <Markdown text={inject(option, notification => notification.content)} />
        <div
          class={styles.progress}
          style={{
            'animation-duration': inject(option, notification => `${notification.timeout}s`),
          }}
        />
      </div>
    </Delay>
  )
}
