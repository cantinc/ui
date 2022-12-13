import { Ref, style } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import { useEscapeListener } from '../../../hooks'
import { Flex } from '../../layout'
import styles from './Overlay.scss'
import { HTMLOverlayElement, OverlayProps } from './types'

const useStyle = style(styles)

export function Overlay (props: OverlayProps) {
  const children = useChildren()
  const styles = useStyle()
  const ref = new Ref<HTMLDivElement>()
  let mouseDown = false

  useEscapeListener(() => handleClose('escape'))

  const handleMouseDown = (e: MouseEvent) => {
    if (e.target === ref.value) {
      mouseDown = true
    }
  }

  const handleClose = (result: string) => {
    const element = ref.value?.lastElementChild as HTMLOverlayElement

    element?.close?.(result)
  }

  const handleMouseUp = (e: MouseEvent) => {
    if (mouseDown && e.target === ref.value) {
      handleClose('background')
    }

    mouseDown = false
  }

  return (
    <Flex
      {...props}
      ref={ref}
      onmousedown={handleMouseDown}
      onmouseup={handleMouseUp}
      class={() => styles.root}>
      {children}
    </Flex>
  )
}
