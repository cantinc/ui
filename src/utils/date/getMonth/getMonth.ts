export function getMonth (month: number) {
  return new Date(`2023-${`${month + 1}`.padStart(2, '0')}-01`)
    .toLocaleString('default', { month: 'long' })
}
