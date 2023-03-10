import { inject, type StateProp, style } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import { Flex, type FlexProps } from '../Flex'
import styles from './Image.scss'

const useStyle = style(styles)

export type ImageProps<E extends HTMLElement = HTMLElement, R = {}, S = any> = FlexProps<E, R & {
  src: StateProp<string>
  size: StateProp<number>
  ratio?: StateProp<number | [number, number]>
  radius?: StateProp<number | string>
}, S>

export function Image<E extends HTMLElement = HTMLElement> ({
  src,
  size,
  ratio = 1,
  radius = 8,
  style,
  ...props
}: ImageProps<E>) {
  const children = useChildren()
  const styles = useStyle()

  return (
    <Flex<E>
      {...(props as FlexProps<E>)}
      style={{
        ...style,
        '--ui-image-ratio': inject(ratio, ratio => Array.isArray(ratio) ? `${ratio[0]} / ${ratio[1]}` : String(ratio)),
        '--ui-image-radius': inject(radius, radius => typeof radius === 'number' ? `${radius}px` : radius),
        '--ui-image-size': inject(size, size => `${size}px`),
        'background-image': inject(src, src => `url("${src}")`),
      }}
      class={() => styles.root}>
      {children}
    </Flex>
  )
}
