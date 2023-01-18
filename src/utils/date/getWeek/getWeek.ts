export function getWeek (week: number, format: Exclude<Intl.DateTimeFormatOptions['weekday'], undefined> = 'long') {
  return new Date(0, 0, week)
    .toLocaleString('default', { weekday: format })
}
