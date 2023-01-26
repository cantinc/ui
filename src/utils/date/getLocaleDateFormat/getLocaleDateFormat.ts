export function getLocaleDateFormat () {
  const date = new Date(4567, 0, 23)
  const dateStr = date.toLocaleDateString()

  return dateStr
    .replaceAll(/(0|1)/g, 'm')
    .replaceAll(/(2|3)/g, 'd')
    .replaceAll(/(4|5|6|7)/g, 'y')
}
