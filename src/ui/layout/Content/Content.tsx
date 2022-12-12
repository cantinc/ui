import { style } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import { Flex, FlexProps } from '../Flex'
import styles from './Content.scss'

const useStyles = style(styles)

export interface ContentProps extends FlexProps {

}

export function Content (props: ContentProps) {
  const children = useChildren()
  const styles = useStyles()

  return (
    <Flex
      align='stretch'
      {...props}
      class={() => styles.root}>
      {children}
    </Flex>
  )
}
