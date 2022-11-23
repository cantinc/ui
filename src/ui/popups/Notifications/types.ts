import { HTMLProps, Style } from '@innet/dom'

export interface NotificationsProps extends Style, HTMLProps<HTMLDivElement> {

}

export interface PushNotificationOptions {
  type?: 'success' | 'error'
  timeout?: number
}

export interface NotificationOptions extends PushNotificationOptions {
  content: string
  key: string
  timeout: number
}
