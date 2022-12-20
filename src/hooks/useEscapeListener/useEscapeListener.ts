import { useListener } from '../useListener'

export function useEscapeListener (listener: () => void) {
  useListener('keyup', e => {
    if (e.key === 'Escape') {
      listener()
    }
  }, document.body)
}
