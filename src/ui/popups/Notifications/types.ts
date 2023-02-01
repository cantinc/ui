import { type HTMLStyleProps } from '@innet/dom'

export interface NotificationsProps extends HTMLStyleProps<HTMLDivElement> {

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
