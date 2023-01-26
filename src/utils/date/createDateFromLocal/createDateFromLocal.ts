import { localeDateFormat } from '../../../constants/locale'

const dIndex = localeDateFormat.indexOf('d')
const mIndex = localeDateFormat.indexOf('m')
const yIndex = localeDateFormat.indexOf('y')

export function createDateFromLocal (date: string) {
  const day = Number(date.slice(dIndex, dIndex + 2))
  const month = Number(date.slice(mIndex, mIndex + 2))
  const year = Number(date.slice(yIndex, yIndex + 4))

  return new Date(year, month - 1, day)
}
