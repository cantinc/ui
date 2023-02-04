function bindTab() {
    const tabListener = (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('tab');
        }
    };
    const clickListener = () => {
        document.body.classList.remove('tab');
    };
    document.addEventListener('keydown', tabListener);
    document.addEventListener('mousedown', clickListener);
    return () => {
        document.removeEventListener('keydown', tabListener);
        document.removeEventListener('mousedown', clickListener);
    };
}

export { bindTab };
