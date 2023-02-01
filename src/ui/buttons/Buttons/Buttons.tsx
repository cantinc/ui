import { style } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import { Flex, type FlexProps } from '../../layout'
import styles from './Buttons.scss'

const useStyles = style(styles)

export interface ButtonsProps extends FlexProps {

}

export function Buttons (props: ButtonsProps) {
  const children = useChildren()
  const styles = useStyles()

  return (
    <Flex wrap gap={24} {...props} class={() => styles.root}>
      {children}
    </Flex>
  )
}
