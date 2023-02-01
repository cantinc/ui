import { type HTMLStyleProps, style } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'

import { Flex } from '../../layout'
import styles from './Browser.scss'

const useStyle = style(styles)

export interface IframeProps extends HTMLStyleProps<HTMLDivElement> {
  height?: number | 'auto'
}

export function Browser ({
  height = 'auto',
  ...props
}: IframeProps = {}) {
  const children = useChildren()
  const styles = useStyle()

  return (
    <div {...props} class={() => styles.root}>
      <Flex padding={8} gap={8}>
        <span class={() => classes([styles.point, styles.pointClose])} />
        <span class={() => classes([styles.point, styles.pointHide])} />
        <span class={() => classes([styles.point, styles.pointFull])} />
      </Flex>
      <div
        style={{
          '--ui-iframe-height': typeof height === 'string' ? height : `${height}px`,
        }}
        class={() => styles.content}>
        {children}
      </div>
    </div>
  )
}
