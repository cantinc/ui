import { inject, type StateProp, style, use } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import { Cache, State, Watch } from 'watch-state'

import { Flex, type FlexProps } from '../Flex'
import styles from './Image.scss'

const useStyle = style(styles)

export type ImageProps<E extends HTMLElement = HTMLElement, R = {}, S = any> = FlexProps<E, R & {
  src: StateProp<string>
  size: StateProp<number>
  ratio?: StateProp<number | [number, number]>
  radius?: StateProp<number | string>
  fallback?: StateProp<string>
}, S>

export function Image<E extends HTMLElement = HTMLElement> ({
  src,
  fallback,
  size,
  ratio = 1,
  radius = 8,
  style,
  loading,
  ...props
}: ImageProps<E>) {
  const children = useChildren()
  const styles = useStyle()
  const loadingSrc = new State(false)
  const error = new State(false)
  const safeSrc = fallback
    ? new Cache(() => error.value ? use(fallback) : use(src))
    : src
  const mixLoading = new Cache(() => use(loading) || loadingSrc.value)

  new Watch(() => {
    const currentSrc = use(safeSrc)

    loadingSrc.value = true

    const image = new window.Image()
    image.onload = () => { loadingSrc.value = false }
    image.onerror = () => {
      if (error.value) {
        loadingSrc.value = false
      } else {
        error.value = true
      }
    }
    image.src = currentSrc
  })

  return (
    <Flex<E>
      {...(props as unknown as FlexProps<E>)}
      loading={mixLoading}
      style={{
        ...style,
        '--ui-image-ratio': inject(ratio, ratio => Array.isArray(ratio) ? `${ratio[0]} / ${ratio[1]}` : String(ratio)),
        '--ui-image-radius': inject(radius, radius => typeof radius === 'number' ? `${radius}px` : radius),
        '--ui-image-size': inject(size, size => `${size}px`),
        'background-image': inject(safeSrc, src => `url("${src}")`),
      }}
      class={() => styles.root}>
      {children}
    </Flex>
  )
}
