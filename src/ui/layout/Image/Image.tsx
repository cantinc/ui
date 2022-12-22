import { StateProp, style, use } from '@innet/dom'
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
  style = '',
  src,
  ratio = 1,
  size,
  radius = 8,
  ...props
}: ImageProps) {
  const children = useChildren()
  const styles = useStyle()

  const newStyle = () => {
    const currentRatio = use(ratio)
    const currentRadius = use(radius)
    const ratioStyle = `--ui-image-ratio:${Array.isArray(currentRatio) ? `${currentRatio[0]} / ${currentRatio[1]}` : currentRatio};`
    const radiusStyle = `--ui-image-radius:${typeof currentRadius === 'number' ? `${currentRadius}px` : currentRadius};`

    return `background-image:url("${use(src)}");${radiusStyle}${ratioStyle}--ui-image-size:${use(size)}px;${use(style)}`
  }

  return (
    <Flex
      {...props}
      style={newStyle}
      class={() => styles.root}>
      {children}
    </Flex>
  )
}
