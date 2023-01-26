const ru = ['д', 'м', 'г']

const locales = {
  ru,
  'ru-RU': ru,
} as const

export function getLocaleDateFormatPlaceholder (format: string, locale: string) {
  if (locale in locales) {
    const [d, m, y] = locales[locale as keyof typeof locales]

    return format
      .replaceAll('d', d)
      .replaceAll('m', m)
      .replaceAll('y', y)
  }

  return format
}
