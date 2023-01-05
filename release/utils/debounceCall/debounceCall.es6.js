function debounceCall(target, debounce = 300) {
    let timer;
    return ((...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            target(...args);
        }, debounce);
    });
}

export { debounceCall };
