import { globalEvent } from 'watch-state'

import { notifications } from './constants'

export function notify (content: string, type?: 'success' | 'error', timeout?: number) {
  globalEvent.start()
  notifications.value.push({
    type,
    content,
    timeout: timeout ?? content.length / 10 + 1,
    key: `${Date.now()}${Math.random()}`,
  })
  notifications.update()
  globalEvent.end()
}
