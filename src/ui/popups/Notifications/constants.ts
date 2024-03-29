import { Cache, State } from 'watch-state'

import { type NotificationOptions } from './types'

export const notifications = new State<NotificationOptions[]>([])

export const notificationsEmpty = new Cache(() => !notifications.value.length)

export const first3notifications = new Cache(() => {
  const values = notifications.value

  return values.slice(0, 3)
})
