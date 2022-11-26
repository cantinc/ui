import { Ref, style } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import { useEscapeListener } from '../../../hooks'
import { Flex } from '../../position'
import styles from './Modals.scss'
import { HTMLModalElement, ModalsProps } from './types'

const useStyle = style(styles)

export function Modals (props: ModalsProps) {
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
    const element = ref.value?.lastElementChild as HTMLModalElement

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
      justify='center'
      align='center'
      {...props}
      ref={ref}
      onmousedown={handleMouseDown}
      onmouseup={handleMouseUp}
      class={styles.root}>
      {children}
    </Flex>
  )
}
