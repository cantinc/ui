import { getLocaleDateFormat } from '../utils/date/getLocaleDateFormat'
import { getLocaleDateFormatPlaceholder } from '../utils/date/getLocaleDateFormatPlaceholder'

export const localeDateFormat = getLocaleDateFormat()
export const locale = navigator.language
export const localeDateFormatPlaceholder = getLocaleDateFormatPlaceholder(localeDateFormat, locale)
