import { HTMLProps, Style, style } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'

import styles from './Icon.scss'
const useStyle = style(styles)

export const icons = {
  cant: '\\e806',
  cross: '\\e808',
  edit: '\\e801',
  gear: '\\e809',
  gift: '\\e818',
  location: '\\e800',
  logout: '\\e803',
  loupe: '\\e810',
  menu: '\\e80c',
  minus: '\\e805',
  plus: '\\e80f',
  tg: '\\e804',
  truck: '\\e819',
  user: '\\e80d',
  viber: '\\e80a',
  vk: '\\e807',
  whatsapp: '\\e802',
} as const

export type Icons = keyof typeof icons

export interface IconProps extends Style, HTMLProps<HTMLSpanElement> {
  icon: Icons
  size?: number
  end?: boolean
}

export function Icon ({
  icon,
  style = '',
  size,
  end,
  ...props
}: IconProps) {
  const children = useChildren()
  const styles = useStyle()

  style = `--ui-icon:'${icons[icon]}';${size ? `--ui-icon-size:${size}px;` : ''}${style}`

  return (
    <span
      {...props}
      class={classes([
        styles.root,
        end && styles.end,
      ])}
      style={style}>
      {children}
    </span>
  )
}