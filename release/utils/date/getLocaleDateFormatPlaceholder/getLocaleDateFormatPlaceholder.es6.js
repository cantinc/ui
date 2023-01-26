const ru = ['д', 'м', 'г'];
const locales = {
    ru,
    'ru-RU': ru,
};
function getLocaleDateFormatPlaceholder(format, locale) {
    if (locale in locales) {
        const [d, m, y] = locales[locale];
        return format
            .replaceAll('d', d)
            .replaceAll('m', m)
            .replaceAll('y', y);
    }
    return format;
}

export { getLocaleDateFormatPlaceholder };
