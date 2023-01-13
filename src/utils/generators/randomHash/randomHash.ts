export function randomHash (length = 32): string {
  let result = ''

  while (length > 10) {
    result += randomHash(10)
    length -= 10
  }

  if (length > 0) {
    result += Math.random().toString(36).slice(-length)
  }

  return result
}
