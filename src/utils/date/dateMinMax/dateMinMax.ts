export function dateMinMax (date: Date, min?: Date, max?: Date): Date {
  if (min && date < min) return min
  if (max && date > max) return max

  return date
}
