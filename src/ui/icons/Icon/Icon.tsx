import { HTMLStyleProps, StateProp } from '@innet/dom'

export interface CustomIconProps extends HTMLStyleProps {
  size?: StateProp<number>
  color?: StateProp<string>
  color1?: StateProp<string>
  color2?: StateProp<string>
}

const iconsImports = {
  default: () => import('./icons/DefaultIcon'),
  edit: () => import('./icons/EditIcon'),
  calendar: () => import('./icons/CalendarIcon'),
  chevron: () => import('./icons/ChevronIcon'),
  chevronUp: () => import('./icons/ChevronUpIcon'),
  chevronLeft: () => import('./icons/ChevronLeftIcon'),
  chevronRight: () => import('./icons/ChevronRightIcon'),
  cross: () => import('./icons/CrossIcon'),
  info: () => import('./icons/InfoIcon'),
  check: () => import('./icons/CheckIcon'),
  menu: () => import('./icons/MenuIcon'),
  user: () => import('./icons/UserIcon'),
  arrow: () => import('./icons/ArrowIcon'),
  arrowLeft: () => import('./icons/ArrowLeftIcon'),
  geo: () => import('./icons/GeoIcon'),
  logout: () => import('./icons/LogoutIcon'),
  gear: () => import('./icons/GearIcon'),
  brick: () => import('./icons/BrickIcon'),
  plus: () => import('./icons/PlusIcon'),
  loupe: () => import('./icons/LoupeIcon'),
  delivery: () => import('./icons/DeliveryIcon'),
  gift: () => import('./icons/GiftIcon'),
  trash: () => import('./icons/TrashIcon'),
  vk: () => import('./icons/VKIcon'),
  tg: () => import('./icons/TGIcon'),
  vb: () => import('./icons/VBIcon'),
  wa: () => import('./icons/WAIcon'),
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
