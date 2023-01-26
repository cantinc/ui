function dateMinMax(date, min, max) {
    if (min && date < min)
        return min;
    if (max && date > max)
        return max;
    return date;
}

export { dateMinMax };
