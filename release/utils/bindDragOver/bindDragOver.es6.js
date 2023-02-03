function bindDragOver() {
    let over = false;
    let timer;
    const addListener = () => {
        clearTimeout(timer);
        if (!over) {
            over = true;
            document.body.classList.add('drag-over');
        }
    };
    const removeListener = () => {
        if (over) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                over = false;
                document.body.classList.remove('drag-over');
            }, 100);
        }
    };
    document.addEventListener('dragover', addListener);
    document.addEventListener('dragend', removeListener);
    document.addEventListener('drop', removeListener);
    window.addEventListener('dragleave', removeListener);
    return () => {
        document.removeEventListener('dragover', addListener);
        document.removeEventListener('dragend', removeListener);
        document.removeEventListener('drop', removeListener);
        window.removeEventListener('dragleave', removeListener);
    };
}

export { bindDragOver };
