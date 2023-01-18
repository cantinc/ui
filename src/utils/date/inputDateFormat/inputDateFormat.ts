export const inputDateFormat = (date: Date, time?: boolean) => {
  const offset = (new Date()).getTimezoneOffset() * 60000
  return (new Date(date.getTime() - offset)).toISOString().slice(0, time ? 16 : 10)
}
