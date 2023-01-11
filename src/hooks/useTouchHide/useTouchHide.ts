import { Ref } from '@innet/dom'
import { State } from 'watch-state'

export type TouchHidePlacement = 'left' | 'top' | 'right' | 'bottom'

export interface TouchHideOptions {
  hide: () => void
  element?: Ref<HTMLElement>
  placement?: TouchHidePlacement
  length?: number
}

export function useTouchHide ({
  hide,
  element,
  placement = 'bottom',
  length = 100,
}: TouchHideOptions) {
  const vertical = placement === 'bottom' || placement === 'top'
  let startX: number
  let startY: number

  const touched = new State(false)
  const touchHide = new State(0)

  return {
    touched,
    touchHide,
    handleTouchStart (e: TouchEvent) {
      const currentElement = element?.value
      if (placement === 'bottom' && currentElement?.scrollTop) return
      if (placement === 'top' && currentElement && (currentElement.scrollHeight - currentElement.scrollTop !== currentElement.clientHeight)) return

      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
      touched.value = true
    },
    handleTouchMove (e: TouchEvent) {
      if (!touched.value) return

      const y = e.touches[0].clientY - startY
      const x = e.touches[0].clientX - startX
      const touchX = Math.abs(x)
      const touchY = Math.abs(y)

      if (vertical ? (placement === 'bottom' ? touchX > y : touchX > -y) : (placement === 'left' ? touchY > -x : touchY > x)) {
        touched.value = false
        touchHide.value = 0
        return
      }

      touchHide.value = vertical ? touchY : touchX
    },
    handleTouchEnd () {
      if (touchHide.value > length) {
        setTimeout(hide)
      }

      touched.value = false
      touchHide.value = 0
    },
  }
}
