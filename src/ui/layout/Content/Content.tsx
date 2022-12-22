import { StateProp, style, use } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import { Flex, FlexProps } from '../Flex'
import styles from './Content.scss'

const useStyles = style(styles)

export interface ContentProps extends FlexProps {
  width?: StateProp<number>
}

export function Content ({
  width,
  style = '',
  ...props
}: ContentProps = {}) {
  const children = useChildren()
  const styles = useStyles()

  const newStyle = () => {
    const currentWidth = use(width)
    const widthStyle = currentWidth ? `--ui-content-width:${currentWidth}px;` : ''

    return `${widthStyle}${use(style)}`
  }

  return (
    <Flex
      align='stretch'
      {...props}
      style={newStyle}
      class={() => styles.root}>
      {children}
    </Flex>
  )
}
