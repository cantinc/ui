import { inject, StateProp, style } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import { Flex, FlexProps } from '../Flex'
import styles from './BadgeFooter.scss'

const useStyle = style(styles)

export interface BadgeFooterProps extends FlexProps {
  offset?: StateProp<number>
}

export function BadgeFooter ({
  offset,
  ...props
}: BadgeFooterProps = {}) {
  const children = useChildren()
  const styles = useStyle()

  return (
    <Flex
      padding={8}
      justify='center'
      {...props}
      style={{
        ...props.style,
        '--ui-badge-footer-offset': inject(offset, offset => offset ? `-${offset}px` : ''),
      }}
      class={() => styles.root}>
      {children}
    </Flex>
  )
}
