import { style } from '@innet/dom'
import { onDestroy } from 'watch-state'

import { Notification } from '../Notification'
import { notifications, notificationsEmpty } from './constants'
import styles from './Notifications.scss'
import { NotificationsProps } from './types'

const useStyle = style(styles)

export function Notifications ({
  onclick,
  ...props
}: NotificationsProps = {}) {
  const styles = useStyle()

  const close = () => {
    notifications.value.shift()
    notifications.update()
  }

  const handleClick = (e: Event) => {
    close()
    ;(onclick as any)?.(e)
  }

  onDestroy(() => {
    notifications.value = []
  })

  return () => {
    if (notificationsEmpty.value) return

    return (
      <delay hide={300}>
        <div {...props} onclick={handleClick} class={styles.root}>
          <for of={() => notifications.value} size={3} key='key'>
            {(notification: any) => (
              <Notification
                onclose={close}
                class={{ progress: styles.progress }}
                notification={notification}
              />
            )}
          </for>
        </div>
      </delay>
    )
  }
}

Notifications.componentName = 'Notifications'
