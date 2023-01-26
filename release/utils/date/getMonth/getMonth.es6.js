function getMonth(month, format = 'long') {
    return new Date(`2023-${`${month + 1}`.padStart(2, '0')}-01`)
        .toLocaleString('default', { month: format });
}

export { getMonth };
