function getWeek(week, format = 'long') {
    return new Date(0, 0, week)
        .toLocaleString('default', { weekday: format });
}

export { getWeek };
