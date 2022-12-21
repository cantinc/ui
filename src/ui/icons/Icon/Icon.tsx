import { HTMLStyleProps, style, use } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'

import styles from './Icon.scss'
const useStyle = style(styles)

export const iconsValues = {
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

export type Icons = keyof typeof iconsValues

export const icons: Icons[] = Object.keys(iconsValues) as any

export interface IconProps extends HTMLStyleProps<HTMLSpanElement> {
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

  const styleProp = () => `--ui-icon:'${iconsValues[icon]}';${size ? `--ui-icon-size:${size}px;` : ''}${use(style)}`

  return (
    <span
      {...props}
      class={classes([
        styles.root,
        end && styles.end,
      ])}
      style={styleProp}>
      {children}
    </span>
  )
}
