import { inject, Ref, type StateProp, style, use } from '@innet/dom'
import { type Merge } from 'src/types'
import { Cache, onDestroy, State, Watch } from 'watch-state'

import { Flex, type FlexElement, type FlexProps, type FlexStyles } from '../Flex'
import styles from './Image.scss'

const useStyle = style(styles)

export type ImageProps<E extends FlexElement = FlexElement, S extends FlexStyles = FlexStyles> = Merge<FlexProps<E, S>, {
  src: StateProp<string>
  size: StateProp<number>
  ratio?: StateProp<number | [number, number]>
  radius?: StateProp<number | string>
  fallback?: StateProp<string>
}>

export function Image<E extends FlexElement = FlexElement> ({
  src,
  fallback,
  size,
  ratio = 1,
  radius = 8,
  style,
  loading,
  ref = new Ref(),
  children,
  ...props
}: ImageProps<E>) {
  const styles = useStyle()
  const loadingSrc = new State(false)
  const error = new State(false)
  const visible = new State(false)
  const mixLoading = new Cache(() => use(loading) || loadingSrc.value)

  const safeSrc = fallback
    ? new Cache(() => error.value ? use(fallback) : use(src))
    : src

  new Watch(() => {
    if (!visible.value) return

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

  let unobserved = false

  const unobserve = () => {
    if (ref.value && !unobserved) {
      unobserved = true
      lazyBackgroundObserver.unobserve(ref.value)
    }
  }

  const lazyBackgroundObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        visible.value = true
        unobserve()
      }
    })
  })

  queueMicrotask(() => {
    if (ref.value) {
      lazyBackgroundObserver.observe(ref.value)
    }
  })

  onDestroy(unobserve)

  return (
    <Flex
      {...(props as unknown as FlexProps<E>)}
      ref={ref}
      loading={mixLoading}
      style={{
        ...style,
        '--ui-image-ratio': inject(ratio, ratio => Array.isArray(ratio) ? `${ratio[0]} / ${ratio[1]}` : String(ratio)),
        '--ui-image-radius': inject(radius, radius => typeof radius === 'number' ? `${radius}px` : radius),
        '--ui-image-size': inject(size, size => `${size}px`),
        'background-image': () => visible.value && `url("${use(safeSrc)}")`,
      }}
      class={() => styles.root}>
      {children}
    </Flex>
  )
}
