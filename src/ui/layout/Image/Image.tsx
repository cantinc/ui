import { inject, StateProp, style } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import { Flex, FlexProps } from '../Flex'
import styles from './Image.scss'

const useStyle = style(styles)

export interface ImageProps extends FlexProps {
  src: StateProp<string>
  size: StateProp<number>
  ratio?: StateProp<number | [number, number]>
  radius?: StateProp<number | string>
}

export function Image ({
  style,
  src,
  ratio = 1,
  size,
  radius = 8,
  ...props
}: ImageProps) {
  const children = useChildren()
  const styles = useStyle()

  return (
    <Flex
      {...props}
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
