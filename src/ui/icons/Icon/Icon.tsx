import { CustomIconProps } from './types'

const iconsImports = {
  default: () => import('./icons/DefaultIcon'),
  cross: () => import('./icons/CrossIcon'),
  edit: () => import('./icons/EditIcon'),
  calendar: () => import('./icons/CalendarIcon'),
  chevron: () => import('./icons/ChevronIcon'),
  chevronUp: () => import('./icons/ChevronUpIcon'),
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
