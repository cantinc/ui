import { Cache, State } from 'watch-state'

import { NotificationOptions } from './types'

export const notifications = new State<NotificationOptions[]>([])

export const notificationsEmpty = new Cache(() => !notifications.value.length)
