function bindDragOver() {
    let over = false;
    const addListener = () => {
        if (!over) {
            over = true;
            document.body.classList.add('drag-over');
        }
    };
    const removeListener = () => {
        if (over) {
            over = false;
            document.body.classList.remove('drag-over');
        }
    };
    document.addEventListener('dragover', addListener);
    document.addEventListener('dragend', removeListener);
    document.addEventListener('drop', removeListener);
    document.addEventListener('dragleave', removeListener);
    return () => {
        document.removeEventListener('dragover', addListener);
        document.removeEventListener('dragend', removeListener);
        document.removeEventListener('drop', removeListener);
        document.removeEventListener('dragleave', removeListener);
    };
}

export { bindDragOver };
