import { createEvent } from 'watch-state'

import { notifications } from './constants'

export const notify = createEvent((content: string, type?: 'success' | 'error', timeout?: number) => {
  notifications.value.push({
    type,
    content,
    timeout: timeout ?? content.length / 10 + 1,
    key: `${Date.now()}${Math.random()}`,
  })
  notifications.update()
})
