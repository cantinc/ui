import { HTMLStyleProps, StateProp } from '@innet/dom'

export interface CustomIconProps extends HTMLStyleProps {
  size?: StateProp<number>
  color?: StateProp<string>
}

const iconsImports = {
  default: () => import('./icons/DefaultIcon'),
  cross: () => import('./icons/CrossIcon'),
  edit: () => import('./icons/EditIcon'),
  calendar: () => import('./icons/CalendarIcon'),
  chevron: () => import('./icons/ChevronIcon'),
  chevronUp: () => import('./icons/ChevronUpIcon'),
  menu: () => import('./icons/MenuIcon'),
  user: () => import('./icons/UserIcon'),
  info: () => import('./icons/InfoIcon'),
  check: () => import('./icons/CheckIcon'),
  arrow: () => import('./icons/ArrowIcon'),
  geo: () => import('./icons/GeoIcon'),
  logout: () => import('./icons/LogoutIcon'),
  gear: () => import('./icons/GearIcon'),
  brick: () => import('./icons/BrickIcon'),
  plus: () => import('./icons/PlusIcon'),
  delivery: () => import('./icons/DeliveryIcon'),
} as const

export type IconProp = keyof typeof iconsImports
export const icons = Object.keys(iconsImports) as IconProp[]

export interface IconProps extends CustomIconProps {
  icon?: IconProp
}

export async function Icon ({
  icon = 'default',
  ...props
}: IconProps = {}) {
  const { default: Icon } = await iconsImports[icon]()

  return <Icon {...props} />
}
