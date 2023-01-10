import { State } from 'watch-state'

export type TouchHidePlacement = 'left' | 'top' | 'right' | 'bottom'

export interface TouchHideOptions {
  hide: () => void
  placement?: TouchHidePlacement
  length?: number
}

export function useTouchHide ({
  hide,
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
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
      touched.value = true
    },
    handleTouchMove (e: TouchEvent) {
      if (!touched.value) return e.preventDefault()

      const y = e.touches[0].clientY - startY
      const x = e.touches[0].clientX - startX
      const touchX = Math.abs(x)
      const touchY = Math.abs(y)

      if (vertical ? (placement === 'bottom' ? touchX > y : touchX > -y) : (placement === 'left' ? touchY > -x : touchY > x)) {
        touched.value = false
        touchHide.value = 0
        return
      }

      const touch = vertical ? touchY : touchX

      if (touch > length) {
        touched.value = false
        hide()
      } else {
        touchHide.value = touch
      }
    },
    handleTouchEnd () {
      touched.value = false
      touchHide.value = 0
    },
  }
}
