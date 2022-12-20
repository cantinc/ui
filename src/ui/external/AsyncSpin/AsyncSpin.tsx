import { Spin, SpinProps } from '../../layout/Spin'

export interface AsyncSpinProps extends SpinProps {
  hide?: number
  show?: number
}

export function AsyncSpin ({
  hide = 300,
  show = 0,
  ...props
}: AsyncSpinProps = {}) {
  return (
    <delay show={show} hide={hide}>
      <Spin {...props} />
    </delay>
  )
}
