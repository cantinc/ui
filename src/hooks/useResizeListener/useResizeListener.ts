import { useListener } from '../useListener'

export function useResizeListener (listener: () => void) {
  useListener('resize', listener)
}
