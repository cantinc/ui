import { HTMLStyleProps, StateProp } from '@innet/dom'

export interface CustomIconProps extends HTMLStyleProps {
  size?: StateProp<number>
  color?: StateProp<string>
}
